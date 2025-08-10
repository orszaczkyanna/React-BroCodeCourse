// import styles from './styles.module.css';
import React, {useState} from 'react'
function Switch(){

    const [inputTestScore, setInputTestScore] = useState(0);

    function getGrade(testScore){        
        let letterGrade;
        switch(true) {
            case testScore >= 90:
                letterGrade = "A";
                break;
            case testScore >= 80:
                letterGrade = "B";
                break;
            case testScore >= 70:
                letterGrade = "C";
                break;
            case testScore >= 60:
                letterGrade = "D";
                break;
            default:
                letterGrade = "F";
        }
        return letterGrade;
    }


    return(
        <div>
            <p>Your test score:</p>
            <input
                type="number"
                min="0"
                max="100"
                onChange={(event) => setInputTestScore(event.target.value)}
                value={inputTestScore}/>
            <br />
            <p>Your letter grade: {getGrade(inputTestScore)}</p>
        </div>
    )
}
export default Switch