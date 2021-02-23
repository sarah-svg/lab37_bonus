import { FIND_USER } from '../actions/findUser';
import { SEARCH_USER } from '../actions/searchUser';
import { SET_REPO } from '../actions/setRepo';

export const initialState = {
  users: {},
  search: '',
  repos: []

};

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case FIND_USER:
      return { ...state, users: action.payload };
    case SEARCH_USER:
      return { ...state, search: action.payload };
    case SET_REPO:
      return { ...state, repos: action.payload };
    default: return state;
  }

}


