import React, { useState } from 'react';
import styles from './UpdateArray.module.css';

function UpdateArray() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const foodsListItems = foods.map((food, index) =>
        <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
        </li>
    );

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        //setFoods(prevFoods => [...prevFoods, newFood]);
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        //setFoods(foods.filter((element, i) => i !== index));
        //_ ignored parameter
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foodsListItems}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray