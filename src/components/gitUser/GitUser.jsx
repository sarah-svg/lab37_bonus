import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GitUser = () => {
  const newUser = useSelector(state => state.users);
  return (
    <div data-testid="gitUser">
      <p> {newUser.name}</p>
      <p>{newUser.id}</p>
      <p>{newUser.followers}</p>
      <p>{newUser.following}</p>
      <a href={newUser.profileLink}>
        Github User Link: {newUser.profileLink}</a>
    </div>
  );
};

GitUser.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired
};

export default GitUser;

