import React, { useEffect, useState } from 'react';
// Generate 2 question/random
// 1 good 3 bad
// fetch 1 which is match the requirement
// fetch 3 other which are different
//All: https://restcountries.eu/rest/v2/all
//Name: https://restcountries.eu/rest/v2/name/{name}
//Capital:https://restcountries.eu/rest/v2/capital/{capital}

function App() {
    const [dataCountry, setDataCountry] = useState([]);
    const [randomName, setRandomName] = useState([]);
    const [randomData, setRandomData] = useState([]);

    async function fetchData() {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setDataCountry(data);
    }

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * dataCountry.length);
        setRandomName(dataCountry[randomIndex]);
        console.log(randomName,"NNN");
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <header>
                <h1>Country quiz</h1>
            </header>
            <article>
                <h3 className="question">is the capital of</h3>
                <button onClick={handleClick}>Generate</button>
            </article>
        </div>
    )
}

export default App;