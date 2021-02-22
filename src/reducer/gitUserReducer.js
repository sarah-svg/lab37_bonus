import { FIND_USER } from '../actions/FindUser';

export const initialState = {
  users: [],
};

export default function reducer(state = initialState, action) {
  const { users }  = state;
  switch(action.type) {
    case FIND_USER:
      return {
        ...state,
        users: [...users, action.payload]
      };
    default:
      return state;
  }

}
