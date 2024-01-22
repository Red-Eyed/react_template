import * as React from 'react';
import styled from 'styled-components';

type TableProps = {
    data: any[][];
};

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const StyledRow = styled.tr`
    // Add any specific styles for rows if needed
`;

const StyledCell = styled.td`
    border: 1px solid black;
    padding: 8px;
`;

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <StyledTable>
            <tbody>
                {data.map((row, rowIndex) => (
                    <StyledRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <StyledCell key={cellIndex}>{cell}</StyledCell>
                        ))}
                    </StyledRow>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table;

// Example of usage
// const data = [
//     [1, 'Alice', 'Developer'],
//     [2, 'Bob', 'Designer']
// ];
// <Table data={data} />
