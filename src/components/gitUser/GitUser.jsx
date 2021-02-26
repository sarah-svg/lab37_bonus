import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Git.css';

const GitUser = () => {
  const newUser = useSelector(state => state.users);
  return (
    <div data-testid="gitUser" className={styles.Git}>
      <img src={newUser.avatar_url}/>
      <p>Name:{newUser.name}</p>
      <p>Bio:{newUser.bio}</p>
      <p>Git-Id:{newUser.id}</p>
      <p>Followers:{newUser.followers}</p>
      <p>Following:{newUser.following}</p>
      <a href={newUser.html_url}>
        Github User Link:{}</a>
      <br></br>
      <br></br>
      <a href={newUser.repos_url}>User Repos</a>  
    
    </div>
  );
};

GitUser.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  repos_url: PropTypes.string,
  bio: PropTypes.string
};

export default GitUser;

