import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { range } from 'fp-ts/NonEmptyArray';
import Table from "./table"
import { generate } from "random-words"

function generateTableData(rows: number, cols: number): any[][] {
    return range(0, rows).map(c => range(0, cols).map(r => generate()))
}

function App() {
    const data = generateTableData(10, 4);


    return (
        <div>
            <Table data={data} />
        </div>
    );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
