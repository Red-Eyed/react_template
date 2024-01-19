import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { range } from 'fp-ts/NonEmptyArray';
import { GenRandomTable } from "./table"


function App() {
    function genElements(numOfElements: number) {
        return range(0, numOfElements - 1)
            .map(() => { return GenRandomTable(2, 10, 2, 4) });
    }

    return (
        <div>
            {genElements(1)}
        </div>
    );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
