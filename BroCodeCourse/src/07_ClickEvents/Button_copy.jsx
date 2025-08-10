import styles from './Button.module.css';

function ButtonClick(){
    // const handleClick = () => {console.log("OUCH!")}
    // return (<button onClick={handleClick}>Click me 😀</button>)

    // const handleClick2 = (name) => {console.log(`${name} stop clicking me!`)}
    // return(<button onClick={() => handleClick2("Em")}>Click me 😀</button> )

    let count = 0;
    const handleClick = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };

    return(
        <button onClick={() => handleClick("Em")}>Click me 😀</button>
    )

}

export default ButtonClick



