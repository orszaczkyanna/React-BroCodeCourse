import styles from './Button.module.css';

function ProfilePictureButton(){

    const imageUrl = './src/assets/150.png'
    const clickHandler = (e) => {e.target.style.display = "none"}

    return(
        <img onClick={(e) => clickHandler(e)} src={imageUrl} alt="profile picture" />
    )
}

export default ProfilePictureButton



