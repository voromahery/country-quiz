import React, {useState} from 'react';

export default function ScoreModal(props) {
    const [isRetryGame, setIsRetryGame] = useState(false);


    // For retry button, everything will be reseted.
function retryAgain() {
    props.fetchData();
    setIsRetryGame(false);
    props.setIsShowModal(false);
    props.setIsDisable(false);
}

    return (
        <div className="card">
            <h1 className="heading-result">Results</h1>
            <p>You got <span className="score">{props.counter}</span> correct answer</p>
            <button className="next" onClick={retryAgain}>Retry</button>
        </div>
    )
}
