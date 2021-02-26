// https://api.github.com/users/:username
export const gitHubUser = (search) => {

  return  fetch(`https://api.github.com/users/${search}`)
  
    .then(res => res.json());
  // .then (console.log);

};




export const userRepos = (search) => {
  return fetch(`https://api.github.com/users/${search}/repos`)
    .then(res => res.json());

};
