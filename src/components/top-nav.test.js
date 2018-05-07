import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />)
	});
	it('Should call onRestartGame when New Game is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		//'.new' is the className of the anchor with New Game text
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});
});