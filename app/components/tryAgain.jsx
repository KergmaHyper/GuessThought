import React from "react";


function TryAgain(props) {
    return (
        <div className="flex column mainpage">
            <div className="flex center">
                <h3>Ви запам'ятали символ:</h3>
            </div>
            <div className="flex center symbol-answer">
                {props.symbols[props.symbol]}
            </div>
        </div>
    )
}
export default TryAgain;