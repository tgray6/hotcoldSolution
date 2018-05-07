import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

});


//THIS OLD TESTING COMPLETELY GOES AWAY BECAUSE WE ALREADY TEST THESE THINGS THROUGH OUR ACTIONS/REDUCERS BY USING DISPATCH, SO WE JUST NEED TO MAKE SURE THIS MAIN COMPONENT RENDERS WITHOUT CRASH, JUST LIKE OUR guess-section and header
// describe('<Game />', () => {
//   it('Renders without crashing', () => {
//     shallow(<Game />);
//   });
//   it('Can start a new game', () => {
//   	const wrapper = shallow(<Game />);

//   	wrapper.setState({
//   		guesses: [1,2,3,4],
//   		feedback: 'Testing',
//   		correctAnswer: -1
//   	});
//   	wrapper.instance().restartGame();
//   	expect(wrapper.state('guesses')).toEqual([]);
//   	expect(wrapper.state('feedback')).toEqual('Make your guess!');
//   	expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
//   	expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
//   })
//   it('Can make guesses', () => {
//   	const wrapper = shallow(<Game />);
//   	wrapper.setState({
//   		correctAnswer: 100
//   	});

//   	//I did not run the test for all the #s, but this is just making sure all the feedback is working based on the guessed #.
//   	wrapper.instance().makeGuess(25);
//   	expect(wrapper.state('guesses')).toEqual([25]);
//   	expect(wrapper.state('feedback')).toEqual('Colder');

//   	wrapper.instance().makeGuess(100);
//   	expect(wrapper.state('guesses')).toEqual([25,100]);
//   	expect(wrapper.state('feedback')).toEqual('You Guessed It!')
//   });
// });