import React from 'react';

export default function ScoreModal(props) {
    return (
        <div className="card">
            <h1>Results</h1>
            <p>You got {props.counter} correct answer</p>
            <button className="next" onClick={props.handleClick}>Retry</button>
        </div>
    )
}
