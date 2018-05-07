import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';

import {addGuess} from '../actions';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
  it('Should dispatch addGuess action when form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const data = '10';
    wrapper.find('input[type="number"]').instance().value = data;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(addGuess(data));
  });
  it('Should reset form after submission', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value='10';
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual("");
  });
});





// import React from 'react';
// import {shallow, mount} from 'enzyme';

// import GuessForm from './guess-form';

// describe('<GuessForm />', () => {
//   it('Renders without crashing', () => {
//     shallow(<GuessForm />);
//   });
//   it('Should fire onMakeGuess callback when submitted', () => {
//     const callback = jest.fn();
//     const wrapper = mount(<GuessForm onMakeGuess={callback} />);
//     const data = 10;
//     wrapper.find('input[type="number"]').instance().value = data;
//     wrapper.simulate('submit');
//     expect(callback).toHaveBeenCalledWith(data.toString());
//   });
//   it('Should reset form after submission', () => {
//     const wrapper = mount(<GuessForm />);
//     const input = wrapper.find('input[type="number"]');
//     input.instance().value=10;
//     wrapper.simulate('submit');
//     expect(input.instance().value).toEqual("");
//   });
// });