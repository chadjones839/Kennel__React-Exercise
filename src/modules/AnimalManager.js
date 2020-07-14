const remoteURL = "http://localhost:5002"

export default {
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  deleteAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postAnimal(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  updateAnimal(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedAnimal)
    }).then(data => data.json())
  }
}