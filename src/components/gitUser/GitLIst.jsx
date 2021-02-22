import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GitList = () => {
  const repoList = useSelector(state => state.repos);

  const repoElements = repoList.map(repo => {
    return <div data-testid="user-div" key={repo.id}>
      <h3>Repo Name: {repo.name}</h3>
      <a href={repo.url}>Repo Url: {repo.url}</a>
    </div>;
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
