import React from "react";

function ButtonHook(props) {
    const [counter, setCounter] = React.useState(0);
    // const pressButtInc = function () {
    //     setCounter(counter + props.dif);
    // }

    const pressButtDec = () => { setCounter(counter - props.dif); }
    return (
        <div>
            <div><b>Counter: {counter} Difference: {props.dif}</b></div>
            <button onClick={pressButtDec}>-- counter</button>
            <button onClick={() => setCounter(counter + props.dif)}>++ counter</button>
        </div>
    );
}
export default ButtonHook;