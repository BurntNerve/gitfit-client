import React from 'react';
import { shallow, mount } from 'enzyme';

import { BurgerMenu } from './burger-menu';

describe('<BurgerMenu />', () => {
  it('Renders without crashing', () => {
    shallow(<BurgerMenu />);
  });
});
