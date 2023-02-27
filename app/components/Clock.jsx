import React, { useEffect, useState } from "react";

function Clock() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    var timerID = null;

    useEffect(() => {
        timerID = setInterval(() => {
            setClock((prevClock) => {
                let newClock = new Date().toLocaleTimeString();
                // console.log("Clock: ", newClock, "timerID: ", timerID);
                return newClock;
            });
        }, 1000);
        console.log("Timer created: ", timerID);
        return () => {
            clearInterval(timerID);
            console.log("timer cleared. timedID: ", timerID);
        };

    }, []);


    return (<sup>{clock}</sup>);
}

export default Clock