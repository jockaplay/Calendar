import db from './SQLiteDatabase';

db.transaction((tx) => {
  tx.executeSql("DROP TABLE schedule"); //testes
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS schedule (id INTEGER PRIMARY KEY AUTOINCREMENT, commitment TEXT, day INT, month INT, year INT, details TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO schedule (commitment, day, month, year, details) values (?, ?, ?, ?, ?);",
        [obj.commitment, obj.day, obj.month, obj.year, obj.details],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE schedule SET commitment=?, day=?, month=?, year=?, details=? WHERE id=?;",
        [obj.commitment, obj.day, obj.month, obj.year, obj.details],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM schedule WHERE id=?;",
        [id],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM schedule;",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM schedule WHERE id=?;",
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default {
  create,
  update,
  find,
  all,
  remove,
};