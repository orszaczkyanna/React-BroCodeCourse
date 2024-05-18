import React, {useState, createContext} from 'react'
import styles from './useContextComponents.module.css'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

// Provider Component: ComponentA
function ComponentA(){

    const [user, setUser] = useState("Name")

    return(
        <div className={styles.box}>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA