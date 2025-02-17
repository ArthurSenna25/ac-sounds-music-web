import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://arthursenna:O2PnqMF5L2OKqW05@cluster0.m64rm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("acSounds"); //Peguei o DB



