import {ADD_GUESS, addGuess, RESTART_GAME, restartGame} from './index';

describe('addGuess', () => {
	it('Should return the action', () => {
		const guess = 50;
		const action = addGuess(guess);
		expect(action.type).toEqual(ADD_GUESS);
		expect(action.guess).toEqual(guess);
	});

describe('RESTART_GAME', () => {
	it('Should return the action', () => {
		const answer = 50;
		const action = restartGame(answer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(answer);
	});
})
});