import React, { useState, useRef } from "react"
import styles from './DiceRoller.module.css';
import dice1 from './dice_images/1.png'
import dice2 from './dice_images/2.png'
import dice3 from './dice_images/3.png'
import dice4 from './dice_images/4.png'
import dice5 from './dice_images/5.png'
import dice6 from './dice_images/6.png'

const diceImagesArray = [dice1, dice2, dice3, dice4, dice5, dice6];

function DiceRoller(){

    const numDiceRef = useRef(null);
    const [diceResults, setDiceResults] = useState([]);

    function rollDice(){
        const numDice = numDiceRef.current.value;
        const newResults = [];

        for (let i = 0; i < numDice; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            newResults.push(value);
        }

        setDiceResults(newResults);
    }

    return(
        <div className={styles.container}>

            <h1>Dice Roller</h1>
            <label htmlFor="numDice"># of dice</label>
            <input
                type="number"
                id="numDice"
                min="1"
                defaultValue="1"
                ref={numDiceRef} />
            <button onClick={rollDice}>Roll Dice</button>
            

            <div className={styles.diceResult}>
                {diceResults.join(', ')}
            </div>

            <div className={styles.diceImages}>
                {diceResults.map((value, index) => 
                    <img key={index} src={diceImagesArray[value - 1]} alt={`Dice ${value}`} />
                )}
            </div>

        </div>
    )
}

export default DiceRoller