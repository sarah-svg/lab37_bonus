import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import GitList from './GitList';
import store from '../../store';




describe('git list component', () => {
  beforeEach(() => cleanup());
  it('test the git list page', () => {
    const { asFragment } = render( 
      <Provider store={store}> <GitList/> </Provider >
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
