const questionHeader = document.getElementById("questionHeader");

let questions = [
    {question:"Which of these is NOT a type of spider?"
},
    {question:"How do spiders move their legs?"
},
    {question: "What types of spiders live the longest?"
},
    {question: "There is a herbivorous species of spider."
},
    {question: "How many body segments do spiders have?"
},
    {question: "In the spider breeding hobby, what does the first stage of development colloquially get called?"
},
    {question: "Why are spiders so important to our way of life?"
},
    {question: "Arguably one of the most venomous spiders in the world, the six eyed sand spider (Sicarius thomisoides) is responsible for how many deaths in the last 10 years?"
}
]


questionHeader.innerText = questions[0].question;