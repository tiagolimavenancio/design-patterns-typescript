import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db: any = null;

export async function mongoClient() {
  if (db) return db;
  await client.connect();

  db = await client.db("sample").collection("key_value");
  return db;
}
