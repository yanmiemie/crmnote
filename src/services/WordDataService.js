import firebase from "../firebase";

const db = firebase.ref("/words");

class WordDataService {
  getAll() {
    return db;
  }

  create(word) {
    return db.push(word);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new WordDataService();
