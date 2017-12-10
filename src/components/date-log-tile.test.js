import React from 'react';
import { shallow, mount } from 'enzyme';

import DateLogTile from './date-log-tile';

describe('<DateLogTile />', () => {
  it('Renders without crashing', () => {
    shallow(<DateLogTile />);
  });
});
