import firebase from "../firebase";

const db = firebase.ref("/paymentnote");

class PayMentNoteDataService {
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

export default new PayMentNoteDataService();
