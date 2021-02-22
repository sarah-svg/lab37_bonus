/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import {  getByPlaceholderText,
  render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Form from './Form';
import { MemoryRouter } from 'react-router-dom';

describe('form', () => {
  it('form', () => {
    render(<Form/>);
    const newUser = getByPlaceholderText('username');
    user.type(newUser);
    return waitFor(() => {
      expect(screen.getByText('Search for a Github user')).not.toBeEmptyDOMElement();
    });

  });
});
