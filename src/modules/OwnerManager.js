const remoteURL = "http://localhost:5002"

export default {
  getOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  deleteOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postOwner(newOwner) {
    return fetch(`${remoteURL}/owners`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOwner)
    }).then(data => data.json())
  },
  updateOwner(editedOwner) {
    return fetch(`${remoteURL}/owners/${editedOwner.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedOwner)
    }).then(data => data.json())
  }
}