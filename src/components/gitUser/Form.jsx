import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '../../actions/FindUser';
import { getUser } from '../../selector/user';

const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUser);

  const [username, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findUser({ username, followers, following, url }));
    setUserName('');
    setFollowers('');
    setFollowing('');
    setUrl('');
  };
  
  return (
    <>
      <title>Search for a Github user</title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUserName(target.value)} />

        <button>Find user</button>
      </form>
    </>
  );

};
export default Form;
