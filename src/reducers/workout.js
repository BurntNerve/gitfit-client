import * as actions from '../actions';

const initialState = {
  activeClasses: {
    burgerMenu: false,
    navMenu: false,
    warning: undefined,
    submitting: false,
  },
  currentExerciseCounter: 0,
  currentExerciseSets: ['5', '5', '5', '5', '5'],
  newWorkout: {},
};
const workoutReducer = (state = initialState, action) => {
  if (action.type === actions.BURGER_ACTIVE) {
    return Object.assign({}, state, {
      activeClasses: {
        burgerMenu: !state.activeClasses.burgerMenu,
      },
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.RESET_COUNTER) {
    return Object.assign({}, state, {
      ...state,
      currentExerciseCounter: 0,
    });
  } else if (action.type === actions.NAV_ACTIVE) {
    return Object.assign({}, state, {
      activeClasses: {
        burgerMenu: state.activeClasses.burgerMenu,
        navMenu: !state.activeClasses.navMenu,
      },
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.NEXT_EXERCISE) {
    if (state.currentExerciseCounter < 2) {
      const updatedWorkout = Object.assign(
        {},
        state.newWorkout,
        action.infoObject,
      );
      return Object.assign({}, state, {
        activeClasses: state.activeClasses,
        currentExerciseCounter: state.currentExerciseCounter + 1,
        currentExerciseSets: ['5', '5', '5', '5', '5'],
        newWorkout: updatedWorkout,
      });
    }
    return Object.assign({}, state, {
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.CHANGE_REPS) {
    const ExerciseSet = [];
    for (let i = 0; i < state.currentExerciseSets.length; i++) {
      if (i === action.index) {
        ExerciseSet.push(action.amount);
      } else if (i !== action.index) {
        ExerciseSet.push(state.currentExerciseSets[i]);
      }
    }

    return Object.assign({}, state, {
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: ExerciseSet,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.TRIGGER_WARNING) {
    //
    const newActiveClasses = Object.assign({}, state.activeClasses, {
      burgerMenu: state.activeClasses.burgerMenu,
      navMenu: state.activeClasses.navMenu,
      warning: action.warningMessage,
    });

    return Object.assign({}, state, {
      activeClasses: newActiveClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.TRIGGER_SUBMITTING) {
    const newActiveClasses = Object.assign({}, state.activeClasses, {
      ...state.activeClasses,
      submitting: !state.activeClasses.submitting,
    });
    return Object.assign({}, state, {
      activeClasses: newActiveClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  }
  return state;
};

export default workoutReducer;
