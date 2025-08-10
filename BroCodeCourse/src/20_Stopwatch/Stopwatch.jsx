import React, { useState, useRef, useEffect } from "react"
import styles from "./Stopwatch.module.css"

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0); // Date.now() - startTimeRef.current
    const startTimeRef = useRef(0); // Date.now() - elapsedTime
    const intervalIdRef = useRef(null); // setInterval(callback, milliseconds)

    useEffect(() => {
        if (isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        // CLEANUP function
        return() => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() { 

        // let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
     }

    return (
        <div className={styles.stopwatch}>
            <div className={styles.display}>{formatTime()}</div>
            <div className={styles.controls}>
                <button onClick={start} className={styles.startButton}>Start</button>
                <button onClick={stop} className={styles.stopButton}>Stop</button>
                <button onClick={reset} className={styles.resetButton}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch