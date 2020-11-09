import React, { useEffect, useState } from 'react';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [randomNumber, setRandomNumber] = useState();
    const [targetValue, setTargetValue] = useState(false);
    const [answer2, setAnswer2] = useState([]);
    const [answer3, setAnswer3] = useState([]);
    const [answer4, setAnswer4] = useState([]);
    const [testAnswer, setTestAnswer] = useState([
        {answer: answer2},
        {answer: answer3},
        {answer: answer4},
        {answer: randomName}
    ]);



    async function fetchData() {
        // Fetch the whole country
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);

        // Get random country by index
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomName(data[randomIndex]);

        const randomIndex2= Math.floor(Math.random() * data.length);
        setAnswer2(data[randomIndex2]);

        const randomIndex3 = Math.floor(Math.random() * data.length);
        setAnswer3(data[randomIndex3]);

        const randomIndex4 = Math.floor(Math.random() * data.length);
        setAnswer4(data[randomIndex4]);

        console.log(randomIndex, randomIndex2, randomIndex3, randomIndex4);
        // Get random question by index
        const randomQuestionIndex = Math.floor(Math.random() * question.length);
        setRandomQuestion(question[randomQuestionIndex]);
        setTestAnswer({answer2, answer3, answer4, randomName});
        console.log(answer4);
    }

    function handleClick() {
        fetchData();
    }

    useEffect(() => {
        fetchData(dataCountry);
        // handleClick(randomName);
    }, [])
    console.log(testAnswer);


    function handleClickAnswer(e) {
        if (e.target.value === randomName.name) {
            console.log(true);
        }
    }

    // console.log(randomName);
    // console.log(dataCountry);

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