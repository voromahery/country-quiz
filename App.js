import React, { useEffect, useState } from 'react';
// Generate 2 question/random
// 1 good 3 bad
// fetch 1 which is match the requirement
// fetch 3 other which are different

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    let askCapital = `${randomName.capital} ${randomQuestion.text}`;
    const [targetValue, setTargetValue] = useState(false);

    async function fetchData() {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomName(data[randomIndex]);

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
    return (
        <div>
            <header>
                <h1>Country quiz</h1>
            </header>
            {randomQuestion.text === "is the capital of ?" ?
                <article>
                    <h3 className="question">{askCapital}</h3>
                    <button value={randomName.name} onClick={handleClickAnswer}>{randomName.name}</button>
                </article>
                :
                <article>
                    <img src={randomName.flag} alt="flag" />
                    <h3 className="question"> {randomQuestion.text}</h3>
                    <button value={randomName.name} onClick={handleClickAnswer}> {randomName.name}</button>
                </article>
            }
            <button className="next" onClick={handleClick}>Next</button>
        </div>
    )
}

export default App;