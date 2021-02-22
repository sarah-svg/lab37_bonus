import { FIND_USER } from '../actions/FindUser';

export const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
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

};
export default reducer;

