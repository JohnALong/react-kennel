const remoteURL = "http://localhost:5002"

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