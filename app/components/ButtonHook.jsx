import React, { useEffect } from "react";

function ButtonHook(props) {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        console.log("Fron useEffect", counter, props);
        return () => {
            console.log("return func from useEffect", counter);
        }
    },
        [counter]);

    return (
        <div>
            <div><b>Counter: {counter} Difference: {props.dif}</b></div>
            <button onClick={() => setCounter(0)}>reset</button>
            <button onClick={() => setCounter((prevCount) => prevCount - props.dif)}>-- counter</button>
            <button onClick={() => setCounter((prevCount) => prevCount + props.dif)}>++ counter</button>
        </div>
    );
}
export default ButtonHook;