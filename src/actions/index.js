export const BURGER_ACTIVE = 'BURGER_ACTIVE';
export const burgerActive = () => ({
  type: BURGER_ACTIVE,
});

export const NAV_ACTIVE = 'NAV_ACTIVE';
export const navActive = () => ({
  type: NAV_ACTIVE,
});

export const MODAL_ACTIVE = 'MODAL_ACTIVE';
export const modalActive = logIndex => ({
  type: MODAL_ACTIVE,
  logIndex,
});

export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const deleteWorkout = logIndex => ({
  type: DELETE_WORKOUT,
  logIndex,
});

export const CHANGE_REPS = 'CHANGE_REPS';
export const changeReps = (amount, index) => ({
  type: CHANGE_REPS,
  amount,
  index,
});

export const NEXT_EXERCISE = 'NEXT_EXERCISE';
export const nextExercise = infoObject => ({
  type: NEXT_EXERCISE,
  infoObject,
});

export const SAVE_WORKOUT = 'SAVE_WORKOUT';
export const saveWorkout = infoObject => ({
  type: SAVE_WORKOUT,
  infoObject,
});

export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const updateWeight = newWeight => ({
  type: UPDATE_WEIGHT,
  newWeight,
});

export const TRIGGER_WARNING = 'TRIGGER_WARNING';
export const triggerWarning = warningMessage => ({
  type: TRIGGER_WARNING,
  warningMessage,
});

export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';
export const updateWorkout = (infoObject, index) => ({
  type: UPDATE_WORKOUT,
  infoObject,
  index,
});
