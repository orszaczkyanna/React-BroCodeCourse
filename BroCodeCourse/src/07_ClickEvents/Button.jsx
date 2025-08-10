import styles from './Button.module.css';

function ButtonClick(){    
    const handleClick = (e) => {e.target.textContent = "OUCH! 😢"};

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me 😀</button>
    )
}

export default ButtonClick



