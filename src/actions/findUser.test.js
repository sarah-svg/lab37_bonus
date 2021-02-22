import { findUser, FIND_USER } from './FindUser';

describe.skip('find user action', () => {
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
