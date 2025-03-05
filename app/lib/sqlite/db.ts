import Database from 'better-sqlite3'
const db = new Database("youtube.db" );
db.pragma("journal_mode = WAL");


export default db;
