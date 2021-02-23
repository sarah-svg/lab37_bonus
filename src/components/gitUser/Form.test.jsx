import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Form from './Form';




describe('Form component', () => {
  afterEach(() => cleanup());
  it('renders UsernameForm', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
