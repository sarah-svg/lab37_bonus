export const FIND_USER = 'FIND_USER';

export const findUser = users => ({
  type: FIND_USER,
  payload: users
});
