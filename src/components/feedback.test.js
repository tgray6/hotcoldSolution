import React from 'react';
import {shallow, mount} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
  it('Should Render Some Feedback', () => {
  	let feedBack = 'Testing';
  	//
  	let wrapper = shallow(<Feedback feedback={feedBack} />);
  	expect(wrapper.contains(feedBack)).toEqual(true);
  });
});