//Populates a random question and answers on page load
const questionHeader = document.getElementById("questionHeader");
const answerButtons = document.getElementById("answerButtons");
const explanationText = document.getElementById("explanationText");


//Array of question objects
let questions = [
    {question:"Which of these is NOT a type of spider?", 
    answers: ["Crab Spider", "Pelican Spider", "Camel Spider", "Mouse Spider"],
    answerImages: ["./assets/images/crab-spider.jpeg", "./assets/images/pelican-spider.jpg", "./assets/images/camel-spider.jpg", "./assets/images/mouse-spider.jpg"],
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
    answerImages: ["./assets/images/tarantula.jpg", "./assets/images/jumping-spider.jpg", "./assets/images/orb-weaver.jpg", "./assets/images/birupes.jpg"],
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
     answerImages: ["./assets/images/peas.webp", "./assets/images/pies.jpg", "./assets/images/eggs.jpg", "./assets/images/keith.webp"],
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
]

//Selects a random question from the array
let randomQuestion = questions[Math.floor(Math.random() * questions.length)];

//Populates question and clears previous answers and explanation
questionHeader.innerText = randomQuestion.question;
answerButtons.innerHTML = '';
explanationText.innerText = '';

//Populates answer buttons, if there are images for answers populates with images too
if (randomQuestion.answerImages) {
    randomQuestion.answerImages.forEach((imageSrc, index) => {
        const button = document.createElement("button");
        const img = document.createElement("img");
        const answerText = document.createElement("span");
        img.src = imageSrc;
        img.alt = randomQuestion.answers[index];
        img.classList.add("answer-image");
        button.appendChild(img);
        button.classList.add("image-button");
        answerButtons.appendChild(button);
        answerText.textContent = randomQuestion.answers[index];
        button.appendChild(answerText);
        button.classList.add("image-button")
    });
} else {
randomQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-button")
    answerButtons.appendChild(button); 
})
};

//When an answer button is clicked, shows if correct or not and the explanation. Disables answer buttons after one is clicked.
const buttons = document.querySelectorAll(".answer-button, .image-button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === randomQuestion.correctAnswer) {
            explanationText.classList.add("explanation-text-toggle")
            explanationText.innerText = "Correct! " + randomQuestion.explanation;
            buttons.forEach(btn => btn.disabled = true);
            //Add increment score functionality here
        } else {
            explanationText.classList.add("explanation-text-toggle")
            explanationText.innerText = "Incorrect! The correct answer is: " + randomQuestion.correctAnswer + ". " + randomQuestion.explanation;
            buttons.forEach(btn => btn.disabled = true);
        }
    })
    });

//Next question button loads a new random question after the current question is answered
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
    location.reload();

    //Add to functionality to not repeat the same question and go to results page once all questions are answered.
    //Next button only appears after answering the question
});