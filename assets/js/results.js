//Get final score and display it on results page
let finalScore = document.getElementById("finalScore");
//Parse score from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const scoreParam = urlParams.get('score');
finalScore.textContent = scoreParam + " / 8";