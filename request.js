class Request {
  constructor(){
    this.data = {};
    this.prev;
  }

  get(url, options, onResolve, onReject) {

    let current = getJson(url, options);
    if (this.prev) {
      Promise.all([this.prev, current]).then(response => {
        let prevResponse = response[0];
        let currentResponse = response[1];
        onResolve(currentResponse, prevResponse);
      }).catch(onReject);
    } else {
      current.then(response => {
        onResolve(response);
      }).catch(onReject);
    }
    this.prev = current;
    return this;
  }
}

function getJson(url, options) {
  return fetch(url, options).then(resp => {
    let result;
    if(resp.headers.get("content-type").includes('application/json')) {
      result = resp.json();
    }
    return result;
  });
}

export default Request;