/* global mount, shallow, render */

import { List, Map } from 'immutable';

import voteReducer from '../store/reducers/vote-reducer';
import types from '../store/actions/constants';

describe('Redux store operations', () => {
  it('sets the initial pool of entries to state', () => {
    const mockState = Map();
    const mockEntries = List.of('Eureka Seven', 'Elfen Lied');
    const nextState = voteReducer(mockState, {
      type: types.SET_ENTRIES,
      entries: mockEntries
    });

    expect(nextState.get('entries')).toEqual(mockEntries);
  });
});
