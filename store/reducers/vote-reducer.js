import types from '../actions/constants';

const voteReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ENTRIES: {
      return state.set('entries', action.entries);
    }

    default:
      return state;
  }
};

export default voteReducer;
