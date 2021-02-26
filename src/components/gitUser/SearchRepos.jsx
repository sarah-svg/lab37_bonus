import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userRepos } from '../../utilis/Fetch';
import { setRepo } from '../../actions/setRepo';
import { searchUser } from '../../actions/searchUser';

const SearchRepos = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.repos);

  const handleChange = ({ target }) => {
    dispatch(setRepo(target.value));
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    const repo = await userRepos(search);
    dispatch((repo));

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea onChange={handleChange}
          placeholder="repo">
        </textarea>
      </label>
      <button>Repo Search</button>
    </form>
  );
};



export default SearchRepos;

