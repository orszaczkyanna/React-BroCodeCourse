import React, {useRef} from 'react';
import styles from './TemperatureConversion.module.css';
function TemperatureConversion(){

    const textBoxRef = useRef(null);
    const toFahrenheitRef = useRef(null);
    const toCelsiusRef = useRef(null);
    const resultRef = useRef(null);
    let temp;

    function convert(){
        if (toFahrenheitRef.current.checked){
            temp = Number(textBoxRef.current.value);
            temp = temp * 9 / 5 + 32;
            resultRef.current.textContent = temp.toFixed(1) + "°F"
        }
        else if (toCelsiusRef.current.checked){
            temp = Number(textBoxRef.current.value);
            temp = (5 / 9) * (temp - 32);
            resultRef.current.textContent = temp.toFixed(1) + "°C"
        }
        else{
            resultRef.current.textContent = "Select a unit";
        }
    }

    return(
        <div className={styles.container}>
            <h1>Temperature conversion</h1>
            <input type="number" id="textBox" defaultValue="0" ref={textBoxRef} />
            <br />
            <input type="radio" id="toFahrenheit" name="unit" ref={toFahrenheitRef} />
            <label htmlFor="toFahrenheit">Celsius ➡️  Fahrenheit</label>
            <br />
            <input type="radio" id="toCelsius" name="unit" ref={toCelsiusRef} />
            <label htmlFor="toCelsius">Fahrenheit ➡️ Celsius</label>
            <br />
            <button onClick={convert}>Submit</button>
            <p className={styles.result} ref={resultRef}></p>
        </div>
    )
}
export default TemperatureConversion