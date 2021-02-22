import { findUser } from '../actions/FindUser';
import { searchUser } from '../actions/searchUser';
import { setRepo } from '../actions/setRepo';
import reducer from './gitUserReducer';

describe.only('git user reducer', () => {
  it('checks to make sure the reducer is working with FIND_USER', () => {
    const state = {
      users: {},
      search: '',
      repos: []
    };

    const action = findUser({
      users: 'sarah-svg'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({  users: { users: 'sarah-svg' },
      search: '',
      repos: [] });
  });
  it('checks to make sure the SEARCH_USER is functioning', () => {
    const state = {
      users: {},
      search: '',
      repos: []
    };

    const action = searchUser('Sarah');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      users: {},
      search: 'Sarah',
      repos: []
    });
  });
  it('tests the redure for repos', () => {
    const state = {
      users: {},
      search: '',
      repos: []
    };
    const action = setRepo([
      { repos: 'lab-01' },
      { repos: 'lab-02' }
    ]);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      users: {},
      search: '',
      repos: [
        { repos: 'lab-01' },
        { repos: 'lab-02' }
      ]
    });


  });





});
