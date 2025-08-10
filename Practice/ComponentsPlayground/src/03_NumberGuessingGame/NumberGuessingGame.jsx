function NumberGuessingGame(){
    const min = 1;
    const max = 100;
    const answer = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(`answer: ${answer}`);

    let guess;
    let attempts = 0;
    let running = true;

    while(running) {
        guess = Number(window.prompt(`Guess a number between ${min} and ${max}`));
        // console.log(`guess: ${guess}, type: ${typeof guess}`);

        if(isNaN(guess)){
            window.alert(`Please enter a valid number`);
        }
        else if(guess < min || guess > max){
            window.alert(`Please enter a valid number`);
        }
        else{
            attempts++;
            if(guess > answer){
                window.alert(`Too high! Try again!`);
            }
            else if (guess < answer) {
                window.alert(`Too low! Try again!`);
            }
            else{
                window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`)
                running = false;
            }
        }
    }


    return(
        <p>NumberGuessingGame</p>
    )
}
export default NumberGuessingGame