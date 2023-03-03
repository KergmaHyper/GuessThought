import React from "react";

function TryAgain(props) {
    return (
        <div>
            <h2>Try Aggain Page</h2>
            <button onClick={props.onClick}> TryAgain </button>
        </div>
    )
}
export default TryAgain;