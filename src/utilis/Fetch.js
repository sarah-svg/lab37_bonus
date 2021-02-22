// https://api.github.com/users/:username
export const gitHubUser = async(search) => {
  return fetch(`https://api.github.com/users/${search}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      followers: json.followers,
      following: json.following,
      profileLink: json.html_url
    }));
};

export const userRepos = async(search) => {
  return fetch(`https://api.github.com/users/${search}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};
