import {ADD_GUESS, RESTART_GAME} from '../actions'

const initialState = {
	guesses: [],
    feedback: 'Guess a Number',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const hotcoldReducer = (state=initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Guess a Number',
            correctAnswer: action.correctAnswer
            // correctAnswer: Math.round(Math.random() * 100) + 1
        });
    }

    if (action.type === ADD_GUESS) {
        let feedback;
        const difference = Math.abs(action.guess - state.correctAnswer);

    	if (difference >= 50) {
      		feedback = 'Colder';
    	} else if (difference >= 30) {
      		feedback = 'Cold';
    	} else if (difference >= 10) {
     		 feedback = 'Warm';
   		} else if (difference >= 1) {
     		feedback = 'Hot!';
    	} else {
      		feedback = 'You Guessed It!';
    	}

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, action.guess]
        });     
    }
    return state;
};