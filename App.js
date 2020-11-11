import React, { useEffect, useState } from 'react';
import Question from './Question';
import ScoreModal from './ScoreModal';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
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
        setDisable(false);
    }

    useEffect(() => {
        fetchData(dataCountry);
    }, [])
  
    // Answer button
    function handleClickAnswer(e) {
        const trueAnswer = e.target.value === randomName.name;
        if (trueAnswer) {
            e.target.style.backgroundColor = "#60BF88"; 
            e.target.style.color="#FFFFFF";
            setDisable(true);
            setLose(false);
            setShowButton(true)
            setCounter(prevState => prevState + 1);
        } 
        if (!trueAnswer) {
            e.target.style.backgroundColor = "#EA8282";
            e.target.style.color="#FFFFFF";
            setDisable(true);
            setLose(true);
            setShowButton(true);
            console.log(trueAnswer);
        } else {
            // e.target.style.backgroundColor = "#FFFFFF";
            // e.target.style.color="rgba(96, 102, 208, 0.8)";
        }
    }

    // Show the modal if the user is lost
    function show() {
        setShowModal(true);
    }

// For retry button, everything will be reseted.
    function retryAgain() {
         fetchData();
         setCounter(0);
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
            <header>
                <h1 className="heading">Country quiz</h1>
            </header>
            {showModal ? <ScoreModal
            counter={counter}
            retryAgain={retryAgain}
            dataCountry={dataCountry}
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
                    showButton={showButton}
                />
            }
        </div>
    )
}

export default App;