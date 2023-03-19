import React, { useEffect, useState } from "react";

function Clock() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    var timerID = null;

    useEffect(() => {
        timerID = setInterval(() => {
            setClock((prevClock) => {
                let newClock = new Date().toLocaleTimeString();
                return newClock;
            });
        }, 1000);
        return () => {
            clearInterval(timerID);
        };

    }, []);


    return (<sup>{clock}</sup>);
}

export default Clock