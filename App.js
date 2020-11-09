import React, { useEffect, useState } from 'react';
// Generate 2 question/random
// 1 good 3 bad
// fetch 1 which is match the requirement
// fetch 3 other which are different

function App() {
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const [question, setQuestion] = useState([{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }])
    const [randomQuestion, setRandomQuestion] = useState([])
    async function fetchData() {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);
    }

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * dataCountry.length);
        setRandomName(dataCountry[randomIndex]);

        const randomQuestionIndex = Math.floor(Math.random() * question.length);
        setRandomQuestion(question[randomQuestionIndex]);
        console.log(randomQuestion, "Question");
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(dataCountry.name);
    return (
        <div>
            <header>
                <h1>Country quiz</h1>
            </header>
            {randomQuestion.text === "is the capital of ?" ?
                    <article>
                        <h3 className="question">{randomName.capital} is the capital of ?</h3>
                        <button>{randomName.name || dataCountry.name}</button>
                    </article>
            :
                        <article>
                            <h3 className="question"><img src={randomName.flag} alt="flag" /> Which country does this flag belong to?</h3>
                            <button>{randomName.name || dataCountry.name}</button>
                        </article>
            }
                    <button onClick={handleClick}>Next</button>
                </div>
    )
}

export default App;