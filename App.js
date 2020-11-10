import React, { useEffect, useState } from 'react';
import Question from './Question';
import ScoreModal from './ScoreModal';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [targetValue, setTargetValue] = useState(false);
    const [testAnswer, setTestAnswer] = useState([]);
    const letter = ["A", "B", "C", "D"];
    const [lose, setLose] = useState(false);
    const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
        
        // Stored everything in an array
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
        setTargetValue();
    }

    useEffect(() => {
        fetchData(dataCountry);
    }, [])

    function handleClickAnswer(e) {
        const trueAnswer = e.target.value === randomName.name;
        if (trueAnswer) {
            setTargetValue(true);
            e.target.style.backgroundColor = "green";
            setLose(false);
            console.log(lose, "LOST");
            setCounter(prevState => prevState + 1);
        } else {
            setTargetValue(false);
            e.target.style.backgroundColor = "red";
            setLose(true);
            console.log(lose, "LOST");
            console.log(counter);
        }
    }

    function show() {
        setShowModal(true);
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
            {showModal ? <ScoreModal counter={counter}/>:
                    <Question
                        questionChoice={questionChoice}
                        randomName={randomName}
                        testAnswer={testAnswer}
                        handleClickAnswer={handleClickAnswer}
                        handleClick={handleClick}
                        lose={lose}
                        show={show}
                    />
}
        </div>
    )
}

export default App;