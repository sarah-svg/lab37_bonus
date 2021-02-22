import React from 'react';
import PropTypes from 'prop-types';

function GitUser({  username, followers, following, url }) {
  return (
    <div>
      <p> {username}</p>
      <p>{followers}</p>
      <p>{following}</p>
      <p>{url}</p>
    </div>
  );
}

GitUser.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GitUser;

