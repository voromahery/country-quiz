import React from 'react';

export default function ScoreModal(props) {
    return (
        <div className="card">
            <h1 className="heading-result">Results</h1>
            <p>You got <span className="score">{props.counter}</span> correct answer</p>
            <button className="next" onClick={props.retryAgain}>Retry</button>
        </div>
    )
}
