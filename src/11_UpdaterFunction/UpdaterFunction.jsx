import React, {useState} from "react"

function UpdaterFunction(){
    const styles = { textAlign: "center" }
    const [count, setCount] = useState(0);

    // setCount(c => c + 1) = setCount(prevCount => prevCount + 1)
    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return(
        <div style={styles}>
            <h1>Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UpdaterFunction