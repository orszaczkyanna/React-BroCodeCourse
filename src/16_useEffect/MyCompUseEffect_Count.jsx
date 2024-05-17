// useEffect(function, [dependencies]);
import React, {useState, useEffect} from "react"

function MyCompUseEffect_Count(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count ${count} ${color}`;
        console.log("Title changed");
    }, [count, color]);

    // // ------- 1. Runs after every re-render -------
    // useEffect(() => {
    //     document.title = `Count ${count}`;
    //     console.log("Title changed");
    // });

    // // ------- 2. Runs only on mount ------- 
    // useEffect(() => {
    //     document.title = "My counter program";
    //     console.log("Title changed");
    // }, []);

    // // ------- 3. Runs on mount + when value changes ------- 
    // useEffect(() => {
    //     document.title = `Count ${count}`;
    //     console.log("Title changed");
    // }, [count]);
    

    function addCount() { setCount(c => c + 1); }
    function subtractCount(){ setCount(c => c - 1); }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default MyCompUseEffect_Count