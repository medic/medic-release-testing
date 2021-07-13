var fs = require('fs');

var columnData = {
  toDo: {
    name: 'To Do',
    order: 0
  },
  pass: {
    name: 'Pass',
    order: 2
  },
  inProg: {
    name: 'In Progress',
    order: 1
  },
  fail:{
    name: 'Fail',
    order: 3
  }
}

const assignees = ['newtewt', 'ngaruko','meghna-khemka']

function getToken() {
  if(!fs.existsSync('token.json')){
    throw new Error('The token.json file is not in this project directory.\n' +
    'Create a personal access token and place it in this directory. \n' +
    'See https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/ for generating a token \n'); 
  }
  return JSON.parse(fs.readFileSync('token.json', 'utf8')).token
}

module.exports = {
  repoName: 'medic-release-testing',
  owner: 'medic',
  labels: "Release Test",
  columnNamesData: columnData,
  token: getToken(),
  headers: {
    'User-Agent': 'medic-qa',
    'Accept': 'application/vnd.github.inertia-preview+json'
  },
  assignees: assignees
}