import React, {useState, useRef} from 'react';
import styles from './PasswordGenerator.module.css';
function PasswordGenerator(){

    const displayPasswordRef = useRef(null);
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    function generate(){
        const lowercaseChars = "abcdefghijklmnpqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%&'()*+,-./'"

        let password = "";
        let allowedChars = "";

        allowedChars += includeLowerCase ? lowercaseChars : "";
        allowedChars += includeUpperCase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";

        if (passwordLength < 8){
            displayPasswordRef.current.textContent = "Password length must be at least 8 characters";
        }
        else if (allowedChars.length === 0){
            displayPasswordRef.current.textContent = "At least 1 set of characters needs to be selected";
        }
        else{
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];                
            }
            displayPasswordRef.current.textContent = password;
        }        
    }

    return(
        <div>
            <div className={styles.password} ref={displayPasswordRef}></div>
            <button onClick={generate}>Generate</button>
            <br />
            <label htmlFor="inputPasswordLength">Password Length:</label>
            <input
                type="number"
                id="inputPasswordLength" 
                onChange={(e) => setPasswordLength(e.target.value)}
                value={passwordLength}/>
            <br />
            <input
                type="checkbox"
                id="inputIncludeLowerCase"
                onChange={(e) => setIncludeLowerCase(e.target.checked)}
                checked={includeLowerCase}/>
            <label htmlFor="inputIncludeLowerCase">Include Lower Case</label>
            <br />
            <input
                type="checkbox"
                id="inputIncludeUpperCase"
                onChange={(e) => setIncludeUpperCase(e.target.checked)}
                checked={includeUpperCase}/>
            <label htmlFor="inputIncludeUpperCase">Include Upper Case</label>
            <br />
            <input
                type="checkbox"
                id="inputIncludeNumbers"
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                checked={includeNumbers}/>
            <label htmlFor="inputIncludeNumbers">Include Numbers</label>
            <br />
            <input
                type="checkbox"
                id="inputIncludeSymbols"
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                checked={includeSymbols}/>
            <label htmlFor="inputIncludeSymbols">Include Symbols</label>
        </div>
    )
}
export default PasswordGenerator