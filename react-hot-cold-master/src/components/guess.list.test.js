import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
  it('Renders the array of guesses', () => {
  	const guessData = [1,2,3];
  	const wrapper = shallow(<GuessList guesses={guessData} />);
  	const list = wrapper.find('li');
  	expect(list.length).toEqual(guessData.length);
  	guessData.forEach((data, index) => {
  		expect(list.at(index).text()).toEqual(data.toString());
  	});
  });
});