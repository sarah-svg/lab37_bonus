import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { gitHubUser } from '../../utilis/Fetch';
// import uuid from 'react-uuid';
// {uuid()}
const GitList = () => {
  

  const repoList = useSelector(state => state.repos);

 

  console.log(repoList);
  
  const repoElements = repoList.map(repos => {
    return <li key={repos.id} data-testid="user">
      <h3>Repo Name: {repos.name}{repos.id}</h3>
      <a href={repos.url}>Repo Url: {repos.url}</a>
    </li>;
  });
 
  return (
    <ul data-testid="repo-list">
      {repoElements}
    </ul>
  );
};

GitList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GitList;
