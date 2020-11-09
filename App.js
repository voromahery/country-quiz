import React, { useEffect, useState } from 'react';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [randomNumber, setRandomNumber] = useState();
    const [targetValue, setTargetValue] = useState(false);

    async function fetchData() {
        // Fetch the whole country
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);

        // Get random country by index
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomName(data[randomIndex]);

        // Get random question by index
        const randomQuestionIndex = Math.floor(Math.random() * question.length);
        setRandomQuestion(question[randomQuestionIndex]);
    }

    function handleClick() {
        fetchData();
    }

    useEffect(() => {
        fetchData(dataCountry);
        // handleClick(randomName);
    }, [])

    function handleClickAnswer(e) {
        if (e.target.value === randomName.name) {
            console.log(true);
        }
    }

    console.log(randomName);
    console.log(dataCountry);

    let questionChoice = "";

    if (randomQuestion.text === "is the capital of ?") {
        questionChoice = `${randomName.capital} ${randomQuestion.text}`;
    }

    if (randomQuestion.text === "Which country does this flag belong to?") {
        questionChoice = "Which country does this flag belong to?";
    }
    return (
        <div>
            <header>
                <h1>Country quiz</h1>
            </header>
                <article>
                    {questionChoice === "Which country does this flag belong to?"?<img src={randomName.flag} alt="flag" />:""}
                    <h3 className="question">{questionChoice}</h3>
                    <button value={randomName.name} onClick={handleClickAnswer}>{randomName.name}</button>
                </article>
            <button className="next" onClick={handleClick}>Next</button>
        </div>
    )
}

export default App;