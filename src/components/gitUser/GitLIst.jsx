import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selector/user';
import uuid from 'react-uuid';
import GitUser from './GitUser';

const GitList = () => {
  const users = useSelector(getUser);
  const allUser = users.map((user) => { 
    <li key={uuid()}>
      <GitUser {...user}/>
    </li>;});
  return <ul>{allUser}</ul>;
};

export default GitList;
