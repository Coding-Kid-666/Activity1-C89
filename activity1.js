//Score Variable.
var myScore = 0;

function updateScore(){
    //Adds 1 to score every time button is clicked
    myScore = myScore + 1;
    document.getElementById("score").innerHTML = "Score:" + myScore;
}
function saveScore(){
    //Saves the current value
    localStorage.setItem("score",myScore);
}
function deleteScore(){
    //Deletes saved score
    localStorage.clear();
    myScore = 0;
    document.getElementById("score").innerHTML = "Score: " + myScore;
}
function nextPage(){
    //Opens "activity_2"
    window.location = "activity_2.html";
}