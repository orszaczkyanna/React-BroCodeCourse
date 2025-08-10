import styles from './Card.module.css'
import profilePic from '../assets/150.png'

function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="profile picture"/>
            <h2 className={styles.cardTitle}>Name</h2>
            <p className={styles.cardText}>I do something</p>

        </div>
    );
}

export default Card