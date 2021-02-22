import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import GitUser from './GitUser';
import store from '../../store';



describe('git user component', () => {
  it('renders to git user page', () => {
    afterEach(() => cleanup());
    const { asFragment } = render(
      <Provider store={ store }> <GitUser /></Provider> 
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
