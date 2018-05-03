import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {

    return (
        <h2 id="guessCount">
            Guesses: <span id="count">{props.guessCount}</span>
        </h2>
    );
}

const mapStateToProps = state => ({
    guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
