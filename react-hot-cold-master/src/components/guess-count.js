import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    // const isPlural = props.guessCount !== 1;
    // const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            Guesses: <span id="count">{props.guessCount}</span> 
        </h2>
    );
}

//after span on line 11
// {guessNoun}!