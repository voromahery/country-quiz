import React, { useState } from 'react';

export default function Question(props) {
    const letter = ["A", "B", "C", "D"];
    const [isShowButton, setIsShowButton] = useState(false);
    const [isLose, setIsLose] = useState(false);
    // Answer button
    function handleClickAnswer(e) {
        const container = document.querySelector(".container");
        const buttons = Array.from(container.querySelectorAll(".button-answer"));
        const trueAnswer = e.target.value === props.correct;

        if (trueAnswer) {
            e.target.classList.add("true");
            props.setIsDisable(true);
            setIsLose(false);
            setIsShowButton(true)
            props.setCounter(prevState => prevState + 1);
        } else {
            e.target.classList.add("false");
            props.setIsDisable(true);
            setIsLose(true);
            setIsShowButton(true);
            console.log(trueAnswer);
        }
        const correctButton = buttons.find(button => button.value === props.correct)
        correctButton.classList.add("true")
    }

    // Next button
    function handleClick() {
        props.fetchData();
        props.setIsDisable(false);
    }


    const sortingAnswer = props.testAnswer.sort((a, b) => a.answer.length - b.answer.length);

    return (
        <div className="container">
            <article className="card">
                {props.questionChoice === "Which country does this flag belong to?" ? <img src={props.randomName.flag} alt="flag" /> : ""}
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
                                <span>{letter[index]}</span> {test.answer}
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
