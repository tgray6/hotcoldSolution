import {hotcoldReducer} from './index';
import {addGuess, restartGame} from '../actions';

describe('hotcoldReducer', () => {
	it('Should set the initial state on load', () => {
		const state = hotcoldReducer(undefined, {type: '_UNKNOWN'});

		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Guess a Number');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});

describe('restartGame', () => {
	it('Should reset the state and start a new game', () => {
		let state = {
			guesses: [1, 2, 3, 4],
			feedback: 'You Guessed It!',
			correctAnswer: 1
		};
		const correctAnswer = 5;
		state = hotcoldReducer(state, restartGame(correctAnswer));
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Guess a Number');
		expect(state.correctAnswer).toEqual(correctAnswer);
	});
});

describe('addGuess', () => {
	it('Should make a guess and send appropriate feedback', () => {
		let state = {
			guesses: [],
			feedback: '',
			correctAnswer: 90
		};

		state = hotcoldReducer(state, addGuess(25));
		expect(state.guesses).toEqual([25]);
		expect(state.feedback).toEqual('Colder');

		state = hotcoldReducer(state, addGuess(60));
		expect(state.guesses).toEqual([25,60]);
		expect(state.feedback).toEqual('Cold');

		state = hotcoldReducer(state, addGuess(80));
		expect(state.guesses).toEqual([25,60,80]);
		expect(state.feedback).toEqual('Warm');

		state = hotcoldReducer(state, addGuess(89));
		expect(state.guesses).toEqual([25,60,80,89]);
		expect(state.feedback).toEqual('Hot!');

		state = hotcoldReducer(state, addGuess(90));
		expect(state.guesses).toEqual([25,60,80,89,90]);
		expect(state.feedback).toEqual('You Guessed It!');
	});
});
});