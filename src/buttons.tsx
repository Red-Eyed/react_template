// Assuming this is in a file named App.tsx

import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { range } from 'fp-ts/NonEmptyArray';



interface MyButtonProps {
    name: string;
    count: number;
    onClick: () => void;
}


function MyButton(props: MyButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.name} clicked {props.count} times
        </button>
    );
}

const App = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            {range(0, 100).map((name: number) => (
                <MyButton name={name.toString()} count={count} onClick={handleClick} />
            ))}
        </div>
    );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
