import styles from './UserGreeting.module.css';
import PropTypes from 'prop-types';

// function UserGreeting(props){
//     if (props.isLoggedIn){
//         return(
//             <h2 className={styles.welcomeMessage}>Welcome {props.username}!</h2>
//         );
//     }
//     else{
//         return (
//             <h2 className={styles.loginPrompt}>Please log in to continue!</h2>
//         );        
//     }
// }

function UserGreeting(props){

    const welcomeMessage =  <h2 className={styles.welcomeMessage}>
                            Welcome {props.username}!
                            </h2>
                            
    const loginPrompt =     <h2 className={styles.loginPrompt}>
                            Please log in to continue!
                            </h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting