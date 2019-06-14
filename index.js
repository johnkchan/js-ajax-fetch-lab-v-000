const baseURL = 'https://api.github.com';
const user = 'johnkchan';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'b87ea50708b46584b562704b6d93f2eddbaa5c21';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const results = document.getElementById('results');
  return results.innerHTML += json.html_url;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${baseURL}/repos/${repo}/issues`
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

   fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${baseURL}/repos/${repo}/issues`
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
}