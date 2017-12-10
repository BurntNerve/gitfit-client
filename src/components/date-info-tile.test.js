import React from 'react';
import { shallow, mount } from 'enzyme';

import { DateInfoTile } from './date-info-tile';

describe('<DateInfoTile />', () => {
  it('Renders without crashing', () => {
    shallow(<DateInfoTile />);
  });
});
