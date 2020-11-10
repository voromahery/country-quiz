import React, { useEffect, useState } from 'react';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [targetValue, setTargetValue] = useState(false);
    const [testAnswer, setTestAnswer] = useState([]);
    const list = [{ letter: "A" }, { letter: "B" }, { letter: "C" }, { letter: "D" }];

    async function fetchData() {
        // Fetch the whole country
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);

        // Get random country by index
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomName(data[randomIndex]);

        const randomIndex2 = Math.floor(Math.random() * data.length);

        const randomIndex3 = Math.floor(Math.random() * data.length);

        const randomIndex4 = Math.floor(Math.random() * data.length);

        // console.log(data[randomIndex], (data[randomIndex2]), (data[randomIndex3]), (data[randomIndex4]));
        // Get random question by index
        const randomQuestionIndex = Math.floor(Math.random() * question.length);
        setRandomQuestion(question[randomQuestionIndex]);
        setTestAnswer([
            {
                answer: data[randomIndex].name,
                id: 1
            },
            {
                answer: data[randomIndex2].name,
                id: 2
            },
            {
                answer: data[randomIndex3].name,
                id: 3
            },
            {
                answer: data[randomIndex4].name,
                id: 4
            },
        ]);
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
        const id = e.target.id;
        console.log(id,"id");
        const dataFind = testAnswer.find(item => item.id === randomName.name);
        console.log(dataFind,"find", randomName.name);
        if (e.target.id === randomName.name) {
            setTargetValue(true);
             e.target.style.backgroundColor="green";
             !e.target.disabled;
        } else {
            setTargetValue(false);
            e.target.style.backgroundColor="red";

        }
    }


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
                {questionChoice === "Which country does this flag belong to?" ? <img src={randomName.flag} alt="flag" /> : ""}
                <h3 className="question">{questionChoice}</h3>
                <ul>
                    {testAnswer.map(test =>
                        <li className="list-item" key={test.id}>
                            <button
                                value={test.answer}
                                id={test.answer}
                                onClick={handleClickAnswer}
                            >
                                {test.answer}
                            </button>
                        </li>
                    )}
                </ul>
            </article>
            <button className="next" onClick={handleClick}>Next</button>
        </div>
    )
}

export default App;