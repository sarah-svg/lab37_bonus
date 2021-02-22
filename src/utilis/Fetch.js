// https://api.github.com/users/:username

export const gitHubUser = (user) => {
  return fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then(({ users }) =>
      users.map((user) => ({
        username: user.login,
        followers: user.followers,
        following: user.following,
        url: user.html_url,
      }))
    );
};
  
export const userRepos = (user) => {
  return fetch(`http://api.github.com/users/${user}/repos`)
    .then((res) => res.json())
    .then(({ repos }) =>
      repos.map((repo) => ({
        repoName: repo.name,
      }))
    );
};
