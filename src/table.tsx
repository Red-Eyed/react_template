import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { range } from 'fp-ts/NonEmptyArray';
import { generate } from "random-words";


function getRandomInt(min: number, max: number,): number {
    return Math.floor(Math.random() * (max - min) + min);
}

function GenCols(min: number, max: number): GridColDef[] {
    const ncols = getRandomInt(min, max)
    const text = generate(2).join(" ")
    return range(0, ncols)
        .map((col: number) => { return { field: `id_${col}`, headerName: text, flex: 1} })

}

function GenRow(col: GridColDef[], id: number): any {
    const row = col
        .map((col: GridColDef) => { return col.field })
        .map((field: string) => {
            const text = generate(2).join(" ")
            return {[field]: text}
        })
        .reduce((accumulator, current) => { return Object.assign(accumulator, current) })
    row["id"] = `${id}`
    return row
}
function GenRows(cols: GridColDef[], min: number, max: number): Array<any> {
    const nrows = getRandomInt(min, max)
    return range(0, nrows)
        .map((n) => { return GenRow(cols, n) })
}

export function GenRandomTable(minRows: number, maxRows: number, minCols: number, maxCols: number) {
    const cols = GenCols(minCols, maxCols)
    const rows = GenRows(cols, minRows, maxRows)
    return (
        <div style={{ width: "auto" }}>
            <DataGrid
                rows={rows}
                columns={cols}
                hideFooter={true}
            />
        </div>
    );
}
