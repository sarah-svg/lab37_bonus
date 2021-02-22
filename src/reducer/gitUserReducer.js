import { FIND_USER } from '../actions/FindUser';
import { SEARCH_USER } from '../actions/searchUser';

export const initialState = {
  users: [],
  search: '',
  repos: []

};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case FIND_USER:
      return { ...state, users: action.payload };
    case SEARCH_USER:
      return { ...state, search: action.payload };
  }

};
export default reducer;

