//Get references to HTML elements
const questionHeader = document.getElementById("questionHeader");
const answerButtons = document.getElementById("answerButtons");
const explanationText = document.getElementById("explanationText");
let score = 0;

//Array of question objects
let questions = [
    {question:"Which of these is NOT a type of spider?", 
    answers: ["Crab Spider", "Pelican Spider", "Camel Spider", "Mouse Spider"],
    answerImages: ["./assets/images/crab-spider.webp", "./assets/images/pelican-spider.webp", "./assets/images/camel-spider.webp", "./assets/images/mouse-spider.webp"],
    correctAnswer: "Camel Spider",
    explanation: "A camel spider is an arachnid but isn’t actually a spider! They lack the ability to produce silk and venom, which are two defining characteristics of spiders."
},
    {question:"How do spiders move their legs?",
    answers: ["Purely muscles", "Muscles and hydraulics", "Pneumatics and muscles", "The power of God and anime"],
    correctAnswer: "Muscles and hydraulics",
    explanation: "They pump their version of blood (hemolymph) around their body to build up pressure in their legs."
},
    {question: "What types of spiders live the longest?", 
    answers: ["Tarantulas", "Jumping Spiders", "Orb Weavers", "All of them live similar livespans"],
    answerImages: ["./assets/images/tarantula.webp", "./assets/images/jumping-spider.webp", "./assets/images/orb-weaver.webp", "./assets/images/birupes.webp"],
    correctAnswer: "Tarantulas",
    explanation: "Some tarantula species can live up to 40 years, whereas most other types of spiders live only 2-3 years."
},
    {question: "There is a herbivorous species of spider.", 
    answers: ["True", "False"],
    correctAnswer: "True",
    explanation: "The species Bagheera kiplingi feeds primarily on the ‘beltian bodies’ (little nubs at the end of leaves) of Mimosoideae trees. It’s incorrect to call them exclusively vegetarian, even though these nubs make up over 90% of their food, they will occasionally eat ant larvae."
},
    {question: "How many body segments do spiders have?", 
    answers: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "The segments of a spider's body are the abdomen and the cephalothorax"
},
    {question: "In the spider breeding hobby, what does the first stage of development colloquially get called?", 
     answers: ["Peas with Knees", "Pies with Eyes", "Eggs with Legs", "Keith with Teeth"],
     answerImages: ["./assets/images/peas.webp", "./assets/images/pies.webp", "./assets/images/eggs.webp", "./assets/images/keith.webp"],
     correctAnswer: "Eggs with Legs",
     explanation: "This gets shortened to EWL"
},
    {question: "Why are spiders so important to our way of life?", 
     answers: ["They kill millions of mosquitoes and similar insects each year, which helps slow the spread of diseases", "They help protect crops against insects that want to eat them", "Their webs have many scientific applications", "Their cute little faces brighten our days", "All of the above" ],
     correctAnswer: "All of the above",
     explanation: "Spiders contribute quite a lot to our ecosystem and way of life!"
},
    {question: "Arguably one of the most venomous spiders in the world, the six eyed sand spider (Sicarius thomisoides) is responsible for how many deaths in the last 10 years?", 
    answers: ["0", "356", "33", "10,048"],
    correctAnswer: "0",
    explanation: "There are no recorded instances of this spider biting people. They are incredibly reluctant to bite anything that is not their prey and instead rely on their incredible camouflage of covering themselves with sand."
}
];

//Function selects a random question from the array and then removes it from the array so it can't be repeated
let getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    if (questions.length > 0) {
        questions.splice(randomIndex, 1);
        return selectedQuestion;       
    } else {
        // Redirects to results page when all questions have been answered
        window.location.href = "results.html?score=" + score;
    }   
};

let currentQuestion = getRandomQuestion();

//Populates question and clears previous answers and explanation
questionHeader.innerText = currentQuestion.question;
answerButtons.innerHTML = '';
explanationText.innerText = '';

//Function populates answer buttons, including images if they exist for that question
let createAnswerButtons = (question, container) => {
    container.innerHTML = '';
    if (question.answerImages) {
        question.answerImages.forEach((imageSrc, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            const answerText = document.createElement("span");

            img.src = imageSrc;
            img.alt = question.answers[index];
            img.classList.add("answer-image");

            button.appendChild(img);
            button.appendChild(answerText);
            answerText.textContent = question.answers[index];
            button.classList.add("image-button");

            container.appendChild(button);
        });
    } else {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("answer-button");
            answerButtons.appendChild(button); 
        });
    }
};

createAnswerButtons(currentQuestion, answerButtons);

//Disables next question button until an answer is selected
const nextButton = document.getElementById("next-button");
nextButton.disabled = true;

//Function checks if answer button clicked is correct or not, and provides the explanation. Disables answer buttons after one is clicked.
let buttons = document.querySelectorAll(".answer-button, .image-button");
    let checkAnswers = () =>  {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (button.textContent === currentQuestion.correctAnswer) {
                    explanationText.classList.add("explanation-text-toggle");
                    explanationText.innerText = "Correct! " + currentQuestion.explanation;
                    score++;
                    button.setAttribute('id', "correct-answer-highlight");
                } else {
                    explanationText.classList.add("explanation-text-toggle");
                    explanationText.innerText = "Incorrect! The correct answer is: " + currentQuestion.correctAnswer + ". " + currentQuestion.explanation;
                    //Highlights the correct answer button and the incorrectly selected button
                    button.setAttribute("id", "incorrect-answer-highlight");
                    buttons.forEach(btn => {
                        if (btn.textContent === currentQuestion.correctAnswer) {
                            btn.setAttribute('id', "correct-answer-highlight");
                        }
                    });
                }
                //Disables answer buttons and enables next question button after an answer is selected
                removeEventListener("click", checkAnswers);
                buttons.forEach(btn => btn.disabled = true);
                nextButton.disabled = false;
                });
            });
        };

 checkAnswers();           

//Next question button loads a new random question and disables itself again.
nextButton.addEventListener("click", () => {
    currentQuestion = getRandomQuestion();
    createAnswerButtons(currentQuestion, answerButtons);
    questionHeader.innerText = currentQuestion.question;
    explanationText.innerText = '';
    explanationText.classList.remove("explanation-text-toggle");
    buttons = document.querySelectorAll(".answer-button, .image-button");
    checkAnswers();
    nextButton.disabled = true;
    });