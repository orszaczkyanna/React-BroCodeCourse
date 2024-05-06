import styles from './List.module.css'

function List() {


    // --------- 2. Objektum tömb ---------
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}]

    fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    fruits.sort((a, b) => a.calories - b.calories); // numeric
    fruits.sort((a, b) => b.calories - a.calories); // reverse numeric (descending)

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}:&nbsp;
    //     {fruit.calories}
    // </li>)

    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
        {fruit.name}:&nbsp;
        {fruit.calories}
    </li>)

    return (
        <ol>{listItems}</ol>
    )
}

export default List