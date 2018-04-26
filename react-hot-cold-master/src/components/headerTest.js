import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe ('<Header />', () => {
	it('Renders header without crashing', () => {
		shallow(<Header />);
	});

});