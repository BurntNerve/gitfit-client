import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export function BurgerMenu(props) {
  const burgerActive = () => {
    props.dispatch(actions.burgerActive());
  };

  return (
    <div
      className={`navbar-burger burger ${props.burgerActive ? 'is-active' : ''}`}
      data-target="navbarThing"
      onClick={() => burgerActive()}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

const mapStateToProps = state => ({
  burgerActive: state.activeClasses.burgerMenu,
});

export default connect(mapStateToProps)(BurgerMenu);
