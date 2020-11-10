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
    const [showButton, setShowButton] = useState(false)
    const [retryGame, setRetryGame] = useState(false);
    const [disable, setDisable] = useState(false);

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

    // Next button
    function handleClick() {
        fetchData();
        setTargetValue(false);
        setDisable(false);

    }

    useEffect(() => {
        fetchData(dataCountry);
    }, [])
  
    // Answer button
    function handleClickAnswer(e) {
        const trueAnswer = e.target.value === randomName.name;

        if (trueAnswer) {
            setTargetValue(true);
            e.currentTarget.style.backgroundColor = "#60BF88"; 
            e.currentTarget.style.color="#FFFFFF";
            setDisable(true);
            setLose(false);
            setShowButton(true)
            setCounter(prevState => prevState + 1);
        } else {
            setTargetValue(false);
            e.target.style.backgroundColor = "#EA8282";
            e.target.style.color="#FFFFFF";
            setDisable(true);
            setLose(true);
            setShowButton(true);
            console.log(trueAnswer);
        }
    }

    // Show the modal if the user is lost
    function show() {
        setShowModal(true);
    }


    function retryAgain() {
         fetchData();
         setRetryGame(false);
         setShowModal(false);
         setDisable(false);
     }

    let questionChoice = "";

    if (randomQuestion.text === "is the capital of ?") {
        questionChoice = `${randomName.capital} ${randomQuestion.text}`;
    }

    if (randomQuestion.text === "Which country does this flag belong to?") {
        questionChoice = "Which country does this flag belong to?";
    }

    return (
        <div className="container">
            {showModal ? <ScoreModal
            counter={counter}
            randomName={randomName}
            dataCountry={dataCountry}
            retryAgain={retryAgain}
            dataCountry={dataCountry}
            randomName={randomName}
            /> :
                <Question
                    questionChoice={questionChoice}
                    randomName={randomName}
                    testAnswer={testAnswer}
                    disable={disable}
                    handleClickAnswer={handleClickAnswer}
                    handleClick={handleClick}
                    lose={lose}
                    show={show}
                    letter={letter}
                    targetValue={targetValue}
                    showButton={showButton}
                />
            }
        </div>
    )
}

export default App;