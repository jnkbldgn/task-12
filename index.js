import Request from './request.js';

const reqTest = new Request();
const options = { 
  method: 'GET',
  mode: 'cors',
  cache: 'default' 
}

let t = reqTest.get('./first.json', options, data => console.log(data), err => console.log(err))
               .get('./second.json', options, (data, prevData) => { console.log(data, prevData)}, err => console.log(err))
               .get('./second.json', options, (data, prevData) => { console.log(data, prevData)}, err => console.log(err))
               .get('./second.json', options, (data, prevData) => { console.log(data, prevData)}, err => console.log(err));