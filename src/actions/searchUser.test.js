import { searchUser, SEARCH_USER } from './searchUser';

describe(' search user', () => {
  it('searches for a specific user', () => {
    const action = searchUser({ search: 'lab24' });

    expect(action).toEqual({
      type: SEARCH_USER,
      payload: { search: 'lab24' }
    });
  });
});
