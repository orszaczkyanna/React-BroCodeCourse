import styles from './List.module.css'

function List() {

    // --------- 1. Egyszerű tömb ---------
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (
        <ol>{listItems}</ol>
    )
}

export default List