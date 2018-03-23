import types from './constants';

export function setEntries(entries) {
  return {
    type: types.SET_ENTRIES,
    entries
  };
}
