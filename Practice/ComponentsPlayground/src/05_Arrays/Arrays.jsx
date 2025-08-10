import styles from './Arrays.module.css';
import React, {useState} from 'react';
function Arrays(){

    const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);
    const [newFruit, setNewFruit] = useState();

    function addEnd() { 
        // fruits.push(newFruit);
        setFruits(f => [...f, newFruit]);
    }

    function removeLast() {      
        // fruits.pop()
        setFruits(fruits.filter((element, index) => index !== fruits.length - 1));
    }

    function addBeginning(){
        // fruits.unshift(newFruit);
        setFruits(f => [newFruit, ...f]);
    }

    function removeFist(){
        // fruits.shift();
        setFruits(fruits.filter((element, index) => index !== 0));
    }

    return(
        <div>
            <ul>
                {fruits.map((fruit, index) => 
                    <li key={index}>{fruit}</li>
                )}
            </ul>
            <input
                type="text"
                placeholder="New fruit..."
                onChange={(e) => setNewFruit(e.target.value)}
                id ="inputNewFruit"
                />
            <br />
            <button onClick={addEnd}>Add to the end</button>
            <button onClick={addBeginning}>Add to the beginning</button>
            <br />
            <button onClick={removeLast}>Remove last</button>
            <button onClick={removeFist}>Remove first</button>

        </div>
    )
}
export default Arrays