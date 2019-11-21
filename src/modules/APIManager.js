const remoteURL = "http://localhost:5002"

// fetch calls to api done dynamically for each component - using paramaters to be able to use one function - notice get all only requires one paramater which will be a string when called to define the end point, and get one requires 2, the 1st a string for endpoint and 2nd the id of what's being fetched

export default {
  get(items, id) {
    return fetch(`${remoteURL}/${items}/${id}`).then(result => result.json())
  },
  getAll(items) {
    return fetch(`${remoteURL}/${items}`).then(result => result.json())
  },
  delete(items, id) {
    return fetch(`${remoteURL}/${items}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}