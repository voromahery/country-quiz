import React, { useState } from 'react';
import adventure from '../icons/adventure.svg';
import wrongIcon from '../icons/wrong.svg';
import correctIcon from '../icons/correct.svg';
const addIcon = document.createElement("img");

export default function Question(props) {
    const letter = ["A", "B", "C", "D"];
    const [isShowButton, setIsShowButton] = useState(false);
    const [isLose, setIsLose] = useState(false);
    // Answer button
    function handleClickAnswer(e) {
        const container = document.querySelector(".container");
        const buttons = Array.from(container.querySelectorAll(".button-answer"));
        const trueAnswer = e.target.value === props.correct;
        addIcon.classList.add("response-icon");
        if (trueAnswer) {
            e.target.classList.add("true");
            e.target.appendChild(addIcon);
            addIcon.src = correctIcon;
            props.setIsDisable(true);
            setIsLose(false);
            setIsShowButton(true)
            props.setCounter(prevState => prevState + 1);

        } 
        if (!trueAnswer) {
            const wrongAnswer = document.createElement("img");
            e.target.classList.add("false");
            wrongAnswer.src=wrongIcon;
            e.target.appendChild(wrongAnswer);
            wrongAnswer.classList.add("response-icon");
            props.setIsDisable(true);
            setIsLose(true);
            setIsShowButton(true);
        }

        const correctButton = buttons.find(button => button.value === props.correct);
        addIcon.src = correctIcon;
        correctButton.appendChild(addIcon);
        correctButton.classList.add("true");
    }

    // Next button
    function handleClick() {
        const container = document.querySelector(".container");
        const buttons = Array.from(container.querySelectorAll(".button-answer"));
        buttons.forEach(button => button.classList.remove("true"));
        const text = Array.from(document.querySelectorAll(".response-icon"));
        text.forEach(name => name.remove());
        console.log(text);
        setIsShowButton(false);
        props.fetchData();
        props.setIsDisable(false);
    }

    // Sort the random answer by the length of the letter
    const sortingAnswer = props.testAnswer.sort((a, b) => a.answer.length - b.answer.length);

    return (
        <div className="container">
            <header className="header">
                <div className="header-wrapper">
                    <h1 className="heading">Country quiz</h1>
                    <img src={adventure} className="adventure" alt="adventure" />
                </div>
            </header>
            <article className="card">
                {props.questionChoice === "Which country does this flag belong to?" ? <img src={props.randomName.flag} alt="flag" className="flag" /> : ""}
                <h3 className="question">{props.questionChoice}</h3>
                <ul className="list">
                    {sortingAnswer.map((test, index) =>
                        <li className="list-item" key={test.id}>
                            <button
                                disabled={props.isDisable ? "disabled" : ""}
                                className="button-answer"
                                value={test.answer}
                                id={test.answer}
                                onClick={handleClickAnswer}
                            >
                                <span className="letter" value={test.answer} id={test.answer}>{letter[index]}</span>
                                {test.answer}
                            </button>
                        </li>
                    )}
                    {isLose === true ? <button className="next" onClick={props.show}>Next</button> : ""}
                    {isShowButton === true && isLose === false ? <button className="next" onClick={handleClick}>Next</button> : ""}
                </ul>
            </article>
        </div>
    )
}
