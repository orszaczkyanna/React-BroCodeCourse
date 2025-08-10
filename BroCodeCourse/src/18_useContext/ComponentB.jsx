import styles from './useContextComponents.module.css'
import ComponentC from './ComponentC.jsx'

function ComponentB(){
    return(
        <div className={styles.box}>
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB