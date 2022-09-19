var knapp_EL = document.querySelector("#knappID");
var input_EL = document.querySelector("#inputID");
var feedback_EL = document.querySelector("#feedback");
var restart_EL = document.querySelector("#restart")
var score_EL = document.querySelector("#score");


var random_num = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var score = 0;
var playing = false;
var new_game = true;
var max_time = 30
var time_left = max_time;


function restart(){
    attempts = 10;
    score = 0;
    random_num = Math.floor(Math.random() * 100) + 1;
    new_game = true;
    playing = false
    time_left = max_time
    feedback_EL.innerHTML = "Guess a number above from 0-100";
    console.log(new_game)
    console.log(playing)
}

function check_attempts(){
    if (attempts <= 0) {
        feedback_EL.innerHTML = "You have no more attempts left. Correct number was: "+ random_num +" - Click restart to try again";
        new_game = true;
        playing = false;
    }
}

function sjekkTall(){
    if (new_game){
        playing = true;
        new_game = false;
    }
    if (playing){
        console.log(input_EL.value);
        guessed_num = input_EL.value;
        attempts--;

        if (guessed_num == random_num){
            feedback_EL.innerHTML = "Congratulations you win";
            score++;
            score_EL.innerHTML = "Score: " + score;
            playing = false;

        } else if (guessed_num < random_num ){
            feedback_EL.innerHTML = guessed_num + " Was too low, try guessing a higher number";
            check_attempts()
            
        } else if ( guessed_num > random_num) {
            feedback_EL.innerHTML = guessed_num + " Was too high, try guessing a lower number";
            check_attempts()
        }

    } // end if playing
} // end sjekktall function

feedback_EL.innerHTML = "Guess a number above from 0-100 - You have 10 attempts";
score_EL.innerHTML = "Score: " + score;

knapp_EL.addEventListener("click", sjekkTall);
restart_EL.addEventListener("click", restart);

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sjekkTall()
    }
})