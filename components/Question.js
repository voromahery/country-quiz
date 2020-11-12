import React from 'react';

export default function Question(props) {
    const letter = ["A", "B", "C", "D"];

     // Next button
     function handleClick() {
        props.fetchData();
        props.setIsDisable(false);
    }

        // Answer button
        function handleClickAnswer(e) {
            const container = document.querySelector(".container");
            const buttons = Array.from(container.querySelectorAll(".button-answer"));
            const trueAnswer = e.target.value === props.correct;
            if (trueAnswer) {
                e.target.classList.add("true");
                props.setIsDisable(true);
                props.setIsLose(false);
                props.setShowButton(true)
                props.setCounter(prevState => prevState + 1);
            } else {
                e.target.classList.add("false");
                props.setIsDisable(true);
                props.setIsLose(true);
                props.setShowButton(true);
                console.log(trueAnswer);
            }
            const correctButton = buttons.find(button => button.value === props.correct)
            correctButton.classList.add("true")
        }
    
    return (
        <div className="container">
            <article className="card">
                {props.questionChoice === "Which country does this flag belong to?" ? <img src={props.randomName.flag} alt="flag" /> : ""}
                <h3 className="question">{props.questionChoice}</h3>
                <ul className="list">
                    {props.testAnswer.sort((a, b) => a.answer.length - b.answer.length).map((test, index) => 
                        <li className="list-item" key={test.id}>
                            <button
                                disabled={props.disable?"disabled":""}
                                className="button-answer"
                                value={test.answer}
                                id={test.answer}
                                onClick={handleClickAnswer}
                            >
                                <span>{letter[index]}</span> {test.answer}
                            </button>
                        </li>
                    )}
                    {props.isLose === true ?<button className="next" onClick={props.show}>Next</button>: ""}
                    {props.showButton===true && props.islose===false ?<button className="next" onClick={handleClick}>Next</button>:""}
                </ul>
            </article>
        </div>
    )
}
