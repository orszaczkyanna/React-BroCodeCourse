import styles from './List.module.css'
import PropTypes from 'prop-types'

function List(props){    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>  <li key={item.id}>
                                                {item.name}:&nbsp;
                                                {item.calories}        
                                            </li>)    
    return(
        <>
            <h3 className={styles.listCategory}>{category}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    )
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.propTypes = {

    category: PropTypes.string,

    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
                                            })),
}

export default List