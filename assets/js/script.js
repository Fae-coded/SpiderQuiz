const questionHeader = document.getElementById("questionHeader");
const answerButtons = document.getElementById("answerButtons");
const explanationText = document.getElementById("explanationText");

let questions = [
    {question:"Which of these is NOT a type of spider?", 
    answers: ["Crab Spider", "Pelican Spider", "Camel Spider", "Mouse Spider"],
    explanation: "A camel spider is an arachnid but isn’t actually a spider!"
    /*Implement clicking on images to answer*/
},
    {question:"How do spiders move their legs?",
    answers: ["Purely muscles", "Muscles and hydraulics", "Pneumatics and muscles", "The power of God and anime"],
    explanation: "They pump their version of blood (hemolymph) around their body to build up pressure in their legs."
},
    {question: "What types of spiders live the longest?", 
    answers: ["Tarantulas", "Jumping Spiders", "Orb Weavers", "All of them live similar livespans"],
    explanation: "Some tarantula species can live up to 40 years, whereas most other types of spiders live only 2-3 years."
    /*Implement clicking on images to answer*/
},
    {question: "There is a herbivorous species of spider.", 
    answers: ["True", "False"],
    explanation: "True! The species Bagheera kiplingi feeds primarily on the ‘beltian bodies’ (little nubs at the end of leaves) of Mimosoideae trees. It’s incorrect to call them exclusively vegetarian though, even though these nubs make up over 90% of their food, they will occasionally eat ant larvae."
},
    {question: "How many body segments do spiders have?", 
    answers: ["1", "2", "3", "4"],
    explanation: "The body of a spider has 2 segments, the abdomen and the cephalothorax"
},
    {question: "In the spider breeding hobby, what does the first stage of development colloquially get called?", 
     answers: ["Peas with Knees", "Pies with Eyes", "Eggs with Legs", "Keith with Teeth"],
     explanation: "Eggs with legs, which then gets shortened to EWL"
     /*Implement clicking on images to answer*/
},
    {question: "Why are spiders so important to our way of life?", 
     answers: ["They kill millions of mosquitoes and similar insects each year, which helps slow the spread of diseases", "They help protect crops against insects that want to eat them", "Their webs have many scientific applications", "Their cute little faces brighten our days", "All of the above" ],
     explanation: "All of the above!"
},
    {question: "Arguably one of the most venomous spiders in the world, the six eyed sand spider (Sicarius thomisoides) is responsible for how many deaths in the last 10 years?", 
    answers: ["0", "356", "33", "10,048"],
    explanation: "There are no recorded instances of this spider biting people. They are incredibly reluctant to bite anything that is not their prey and instead rely on their incredible camouflage of covering themselves with sand."
}
]

let randomQuestion = questions[Math.floor(Math.random() * questions.length)];

questionHeader.innerText = randomQuestion.question;
answerButtons.innerHTML = '';
explanationText.innerText = '';

randomQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-button")
    answerButtons.appendChild(button); 
})

/* when answer button is clicked shows explanation. Implement checking if answer is correct first

button.addEventListener("click", () => {
        explanationText.innerText = randomQuestion.explanation;
    });*/