import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GitUser = () => {
  const newUser = useSelector(state => state.users);
  return (
    <div data-testid="gitUser">
      <img src={newUser.avatar_url}/>
      <p>Name:{newUser.name}</p>
      <p>Git-Id:{newUser.id}</p>
      <p>Followers:{newUser.followers}</p>
      <p>Following:{newUser.following}</p>
      <a href={newUser.html_url}>
        Github User Link:{}</a>
    </div>
  );
};

GitUser.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string
};

export default GitUser;

