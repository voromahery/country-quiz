import React, { useEffect, useState } from 'react';
import Question from './components/Question';
import ScoreModal from './components/ScoreModal';

function App() {
    // Create all necessaries variable
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const question = [{ text: "is the capital of ?" }, { text: "Which country does this flag belong to?" }];
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [testAnswer, setTestAnswer] = useState([]);
    const [lose, setLose] = useState(false);
    const [counter, setCounter] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const [isDisable, setIsDisable] = useState(false);
    const [correct, setCorrect] = useState("");
    const [isShowModal, setIsShowModal] = useState(false);

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
        setCorrect(data[randomIndex].name);
    }


    useEffect(() => {
        fetchData();
    }, [])


    // Show the modal if the user is lost
    function show() {
        setIsShowModal(true);
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
            {isShowModal ? <ScoreModal
                counter={counter}
                dataCountry={dataCountry}
                fetchData={fetchData}
                setCounter={setCounter}
                setIsShowModal={setIsShowModal}
                setIsDisable={setIsDisable}
            /> :
                <Question
                    questionChoice={questionChoice}
                    randomName={randomName}
                    testAnswer={testAnswer}
                    isDisable={isDisable}
                    setIsDisable={setIsDisable}
                    lose={lose}
                    setLose={setLose}
                    show={show}
                    setCounter={setCounter}
                    fetchData={fetchData}
                    setShowButton={setShowButton}
                    showButton={showButton}
                    correct={correct}
                />
            }
        </div>
    )
}

export default App;