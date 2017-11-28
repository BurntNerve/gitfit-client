import moment from 'moment';
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
      firstSets: [5, 5, 5, 5, 5],
      firstWeight: 180,
      firstSucceeded: true,
      secondExercise: 'Bench Press',
      secondSets: [5, 5, 5, 5, 5],
      secondWeight: 95,
      secondSucceeded: true,
      thirdExercise: 'Barbell Row',
      thirdSets: [5, 5, 5, 5, 5],
      thirdWeight: 95,
      thirdSucceeded: true,
      bodyWeight: 165,
      modalActive: false,
    },
    {
      date: 'November 19th 2017',
      type: 'b',
      firstExercise: 'Squat',
      firstSets: [5, 5, 5, 5, 5],
      firstWeight: 185,
      firstSucceeded: true,
      secondExercise: 'Overhead Press',
      secondSets: [5, 5, 5, 5, 5],
      secondWeight: 75,
      secondSucceeded: true,
      thirdExercise: 'Deadlift',
      thirdSets: [5, 5, 5, 5, 5],
      thirdWeight: 190,
      thirdSucceeded: true,
      bodyWeight: 165,
      modalActive: false,
    },
    {
      date: 'November 21st 2017',
      type: 'a',
      firstExercise: 'Squat',
      firstSets: [5, 5, 5, 5, 5],
      firstWeight: 190,
      firstSucceeded: true,
      secondExercise: 'Bench Press',
      secondSets: [5, 5, 5, 5, 5],
      secondWeight: 100,
      secondSucceeded: true,
      thirdExercise: 'Barbell Row',
      thirdSets: [5, 5, 5, 5, 5],
      thirdWeight: 100,
      thirdSucceeded: true,
      bodyWeight: 166,
      modalActive: false,
    },
  ],
  activeClasses: {
    burgerMenu: false,
    navMenu: false,
  },
  currentExerciseCounter: 0,
  currentExerciseSets: ['5', '5', '5', '5', '5'],
  newWorkout: {
    date: String(moment().format('MMM Do YYYY')),
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
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.NAV_ACTIVE) {
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts: [...state.workouts],
      activeClasses: {
        burgerMenu: state.activeClasses.burgerMenu,
        navMenu: !state.activeClasses.navMenu,
      },
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
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
        firstWeight: workout.firstWeight,
        firstSucceeded: workout.firstSucceeded,
        secondExercise: workout.secondExercise,
        secondSets: workout.secondSets,
        secondWeight: workout.secondWeight,
        secondSucceeded: workout.secondSucceeded,
        thirdExercise: workout.thirdExercise,
        thirdSets: workout.thirdSets,
        thirdWeight: workout.thirdWeight,
        thirdSucceeded: workout.thirdSucceeded,
        modalActive: !workout.modalActive,
      });
    });
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts,
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.DELETE_WORKOUT) {
    const workouts = state.workouts.filter((workout, index) => index !== action.logIndex);
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts,
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.NEXT_EXERCISE) {
    console.log(action);
    if (state.currentExerciseCounter < 2) {
      const updatedWorkout = Object.assign(
        {},
        state.newWorkout,
        action.infoObject,
      );

      return Object.assign({}, state, {
        currentUser: state.currentUser,
        workouts: state.workouts,
        activeClasses: state.activeClasses,
        currentExerciseCounter: state.currentExerciseCounter + 1,
        currentExerciseSets: state.currentExerciseSets,
        newWorkout: updatedWorkout,
      });
    }
    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts: state.workouts,
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: state.currentExerciseSets,
      newWorkout: state.newWorkout,
    });
  } else if (action.type === actions.CHANGE_REPS) {
    //
    const ExerciseSet = [];
    for (let i = 0; i < state.currentExerciseSets.length; i++) {
      if (i === action.index) {
        ExerciseSet.push(action.amount);
      } else if (i !== action.index) {
        ExerciseSet.push(state.currentExerciseSets[i]);
      }
    }

    return Object.assign({}, state, {
      currentUser: state.currentUser,
      workouts: state.workouts,
      activeClasses: state.activeClasses,
      currentExerciseCounter: state.currentExerciseCounter,
      currentExerciseSets: ExerciseSet,
      newWorkout: state.newWorkout,
    });
  }
  return state;
};
