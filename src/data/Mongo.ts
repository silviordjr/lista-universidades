import { MongoClient as mongo } from 'mongodb';

const DATABASE = 'application';
const MONGODB_URI = 'mongodb://db:27017';

export const getDatabase = (): Promise<Function> => {
  const promiseCallback = (resolve:any, reject:any) => {
    mongo.connect(MONGODB_URI, (err, client) => {
      if (err) return reject(err);

      const db = client?.db(DATABASE);
      resolve(db);
    });
  }
  return new Promise(promiseCallback);
};