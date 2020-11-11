import React from 'react';

export default function Question(props) {

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
                                onClick={props.handleClickAnswer}
                            >
                                <span>{props.letter[index]}</span> {test.answer}
                            </button>
                        </li>
                    )}
                    {props.lose === true ?<button className="next" onClick={props.show}>Next</button>: ""}
                    {props.showButton===true && props.lose===false ?<button className="next" onClick={props.handleClick}>Next</button>:""}
                </ul>
            </article>
        </div>
    )
}
