import styles from "./ColoredSquares.module.css";
import React, { useState, createContext } from "react";
import Number from "./Number";

export const ColorContext = createContext();

function ColoredSquares(){

    const [evenNumBgColor, setEvenNumBgColor] = useState("#0088ff");
    const [oddNumBgColor, setOddNumBgColor] = useState("#2200aa");
    const bgColorsArray = [evenNumBgColor, oddNumBgColor]

    function handleEvenColorChange(e) { setEvenNumBgColor(e.target.value); }
    function handleOddColorChange(e) { setOddNumBgColor(e.target.value); }

    return(        
        <div>
            <input type="color" value={evenNumBgColor} onChange={(e) => handleEvenColorChange(e)} />
            <label>Color for even numbers</label> <br />
            <input type="color" value={oddNumBgColor} onChange={(e) => handleOddColorChange(e)} />
            <label>Color for odd numbers</label> <br />
            <ColorContext.Provider value={bgColorsArray}>
                <Number num={0} />
                <Number num={1} />
                <Number num={2}/>
                <Number num={3} />
                <Number num={4} />
                <Number num={5} />
                <Number num={6} />
                <Number num={7} />
                <Number num={8} />
                <Number num={9} />
            </ColorContext.Provider>
        </div>
    )
}

export default ColoredSquares

