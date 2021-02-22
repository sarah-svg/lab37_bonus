import { setRepo, SET_REPO } from './setRepo';

describe('set repo action', () => {
  it('set the repo on the page', () => {
    const action = setRepo({ repos: '1' });

    expect(action).toEqual({ type: SET_REPO, payload: { repos: '1' } });
  });
});
