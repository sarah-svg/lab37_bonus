import React from 'react';
import Form from '../components/gitUser/Form';
import GitList from '../components/gitUser/GitList';
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
