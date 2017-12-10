import React from 'react';
import { shallow, mount } from 'enzyme';

import ExerciseInput from './exercise-input';

describe('<ExerciseInput />', () => {
  it('Renders without crashing', () => {
    shallow(<ExerciseInput />);
  });
});
