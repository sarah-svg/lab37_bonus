import React from 'react';
import Form from '../components/gitUser/Form';
import GitList from '../components/gitUser/GitLIst';
import GitUser from '../components/gitUser/GitUser';

export default function UserPage() {
  return (
    <>
      <Form/>
      <GitList/>
      <GitUser/>
    </>
  );
}
