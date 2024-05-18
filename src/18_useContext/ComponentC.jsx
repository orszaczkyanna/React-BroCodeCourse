import React, {useContext} from 'react'
import {UserContext} from './ComponentA.jsx'
import styles from './useContextComponents.module.css'
import ComponentD from './ComponentD.jsx'

// Consumer Component: ComponentC
function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className={styles.box}>
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC