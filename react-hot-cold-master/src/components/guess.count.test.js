import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });
  it('Should render guess count', () => {
  	const data = 1;
  	const wrapper = shallow(<GuessCount guessCount={data} />);
  	expect(wrapper.text()).toEqual(`Guesses: ${data}`);
  })
});