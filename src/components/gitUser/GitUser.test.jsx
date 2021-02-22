import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import GitUser from './GitUser';


describe('git user component', () => {
  it('renders to git user page', () => {
    afterEach(() => cleanup());
    const { asFragment } = render(
      <MemoryRouter> <GitUser username={'sarah-svg'} /></MemoryRouter> 
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
