import * as actions from '../actions';

const initialState = {
  currentUser: 'seanlbray',
  goals: {
    startingWeight: 164,
    goalWeight: 180,
  },
  workouts: [
    {
      date: 'November 17th 2017',
      type: 'a',
      firstExercise: 'Squat',
      firstSets: '5',
      firstReps: '5',
      firstWeight: 180,
      secondExercise: 'Bench Press',
      secondSets: '5',
      secondReps: '5',
      secondWeight: 95,
      thirdExercise: 'Barbell Row',
      thirdSets: '5',
      thirdReps: '5',
      thirdWeight: 95,
      bodyWeight: 165,
      modalActive: false,
    },
    {
      date: 'November 19th 2017',
      type: 'b',
      firstExercise: 'Squat',
      firstSets: '5',
      firstReps: '5',
      firstWeight: 185,
      secondExercise: 'Overhead Press',
      secondSets: '5',
      secondReps: '5',
      secondWeight: 75,
      thirdExercise: 'Deadlift',
      thirdSets: '5',
      thirdReps: '5',
      thirdWeight: 190,
      bodyWeight: 165,
      modalActive: false,
    },
    {
      date: 'November 21st 2017',
      type: 'a',
      firstExercise: 'Squat',
      firstSets: '5',
      firstReps: '5',
      firstWeight: 190,
      secondExercise: 'Bench Press',
      secondSets: '5',
      secondReps: '5',
      secondWeight: 100,
      thirdExercise: 'Barbell Row',
      thirdSets: '5',
      thirdReps: '5',
      thirdWeight: 100,
      bodyWeight: 166,
      modalActive: false,
    },
  ],
  activeClasses: {
    burgerMenu: false,
    navMenu: false,
  },
};

export const workoutReducer = (state = initialState, action) => {
  if (action.type === actions.BURGER_ACTIVE) {
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts: [...state.workouts],
      activeClasses: {
        burgerMenu: !state.activeClasses.burgerMenu,
      },
    });
  } else if (action.type === actions.NAV_ACTIVE) {
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts: [...state.workouts],
      activeClasses: {
        burgerMenu: state.activeClasses.burgerMenu,
        navMenu: !state.activeClasses.navMenu,
      },
    });
  } else if (action.type === actions.MODAL_ACTIVE) {
    const workouts = state.workouts.map((workout, index) => {
      if (index !== action.logIndex) {
        return workout;
      }
      return Object.assign({}, workout, {
        date: workout.date,
        type: workout.type,
        firstExercise: workout.firstExercise,
        firstSets: workout.firstSets,
        firstReps: workout.firstReps,
        firstWeight: workout.firstWeight,
        secondExercise: workout.secondExercise,
        secondSets: workout.secondSets,
        secondReps: workout.secondReps,
        secondWeight: workout.secondWeight,
        thirdExercise: workout.thirdExercise,
        thirdSets: workout.thirdSets,
        thirdReps: workout.thirdReps,
        thirdWeight: workout.thirdWeight,
        modalActive: !workout.modalActive,
      });
    });
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts,
      activeClasses: state.activeClasses,
    });
  } else if (action.type === actions.DELETE_WORKOUT) {
    //
    const workouts = state.workouts.filter((workout, index) => index !== action.logIndex);
    // console.log(workouts);
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts,
      activeClasses: state.activeClasses,
    });
  }
  return state;
};
