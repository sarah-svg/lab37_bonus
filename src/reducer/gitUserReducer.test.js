import { findUser } from '../actions/FindUser';
import reducer from './gitUserReducer';

describe('git user reducer', () => {
  it('checks to make sure the reducer is working', () => {
    const state = {
      users: []
    };

    const action = findUser({
      user: 'sarah-svg'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({ users: [{  user: 'sarah-svg' }] });
  });
});
