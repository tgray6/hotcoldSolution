import React from 'react';
import {connect} from 'react-redux';

import {restartGame} from '../actions';

import './top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a
                        href="#feedback"
                        className="new"
                        aria-label="Start a new game"
                        onClick={() =>
                            props.dispatch(
                                restartGame(Math.floor(Math.random() * 100) + 1)
                            )}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);
