const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database/db.json');
export const userDB = low(adapter);

