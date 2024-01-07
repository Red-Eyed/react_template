import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { range } from 'fp-ts/NonEmptyArray';

interface MyButtonProps {
    key: string;
    name: string;
    count: number;
    onClick: () => void;
}


function MyButton(props: MyButtonProps): React.JSX.Element {
    return (
        <button onClick={props.onClick}>
            {props.name} clicked {props.count} times
        </button>
    );
}

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function genNButtons(buttonsNum: number) {
        function namedButton(name: string) {
            return (<MyButton key={ name } name={name} count={count} onClick={handleClick} />)
        }

        return range(0, buttonsNum)
            .map((n) => n.toString())
            .map(namedButton);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            {genNButtons(10)}
        </div>
    );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
