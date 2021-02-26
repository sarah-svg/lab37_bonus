import React from 'react';
import Form from '../components/gitUser/Form';
import GitList from '../components/gitUser/GitList';
import GitUser from '../components/gitUser/GitUser';
import SearchRepos from '../components/gitUser/searchRepos';

export default function UserPage() {
  return (
    <>
      <Form/>
      <GitList/>
      <GitUser/>
      <SearchRepos/>
    </>
  );
}
