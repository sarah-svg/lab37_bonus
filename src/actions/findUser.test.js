import { findUser, FIND_USER } from './findUser';

describe('find user action', () => {
  it('finds a specific user', () => {

    const action = findUser({
      users: 'sarah-svg'
    });
    expect(action).toEqual({
      type: FIND_USER,
      payload: { users: 'sarah-svg' }
    });
  });
});
