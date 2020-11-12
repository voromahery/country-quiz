import React, { useState } from 'react';
import scoreImage from '../icons/win.svg';

export default function ScoreModal(props) {
    const [isRetryGame, setIsRetryGame] = useState(false);


    // For retry button, everything will be reseted.
    function retryAgain() {
        props.fetchData();
        setIsRetryGame(false);
        props.setIsShowModal(false);
        props.setIsDisable(false);
        props.setCounter(0);
    }

    let scoreLetter = "";

    if (props.counter === 0 || props.counter === 1) {
        scoreLetter = "answer";
    } else {
        scoreLetter = "answers";
    }

    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <h1 className="heading">Country quiz</h1>
                </div>
            </header>
            <div className="card score-card">
                <img src={scoreImage} alt="score" />
                <h1 className="heading-result">Results</h1>
                <p>You got <span className="score">{props.counter}</span> correct {scoreLetter}</p>
                <button className="retry-button" onClick={retryAgain}>Retry</button>
            </div>
        </>
    )
}
