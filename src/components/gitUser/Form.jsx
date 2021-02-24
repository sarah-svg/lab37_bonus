import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '../../actions/findUser';

import { searchUser } from '../../actions/searchUser';
import { setRepo } from '../../actions/setRepo';
import { gitHubUser } from '../../utilis/Fetch';


const Form = () => {

  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const handleChange = ({ target }) => {

    dispatch(searchUser(target.value));

  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(search, 'form');
    const user = await gitHubUser(search);

    dispatch(findUser(user));
  };
  // eslint-disable-next-line keyword-spacing
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Enter a user name on Github
        <textarea onChange={handleChange}
          placeholder="username">
        </textarea>
      </label>
      <button>Enter</button>
    </form>
  );

};
export default Form;


