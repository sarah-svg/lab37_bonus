import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import GitList from './GitLIst';

describe('git list component', () => {
  beforeEach(() => cleanup());
  it('test the git list page', () => {
    const { asFragment } = render( 
      <MemoryRouter> <GitList/></MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
