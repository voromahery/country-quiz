import React from 'react';

export default function Question(props) {
let icon = "";

    return (
        <div className="container">
            <header>
                <h1 className="heading">Country quiz</h1>
            </header>
            <article>
                {props.questionChoice === "Which country does this flag belong to?" ? <img src={props.randomName.flag} alt="flag" /> : ""}
                <h3 className="question">{props.questionChoice}</h3>
                <ul>
                    {props.testAnswer.sort((a, b) => a.answer.length - b.answer.length).map((test, index) => 
                        <li className="list-item" key={test.id}>
                            <button
                                className="button-answer"
                                value={test.answer}
                                id={test.answer}
                                onClick={props.handleClickAnswer}
                            >
                                <span>{props.letter[index]}</span> {test.answer}
                    <span>{icon}</span>
                            </button>
                        </li>
                    )}
                    {props.lose?<button className="next" onClick={props.show}>Next</button>:
                    <button className="next" onClick={props.handleClick}>Next</button>
                    }
                </ul>
            </article>
        </div>
    )
}