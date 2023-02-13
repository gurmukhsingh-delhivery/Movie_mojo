import cassandra from 'cassandra-driver';
import * as dotEnv from "dotenv";

dotEnv.config();

const {NODE_IP, DATA_CENTER, KEYSPACE}  = process.env;

// console.log(DATA_CENTER);
if(!NODE_IP || !DATA_CENTER || !KEYSPACE){
  console.log("environment varibales are not set")
  process.exit(1);
}


// console.log(NODE_IP,DATA_CENTER,KEYSPACE);

// connect to databse
export const getConnection=()=>{ 
  const client = new cassandra.Client({
  contactPoints: [NODE_IP],
  localDataCenter: DATA_CENTER,
  keyspace: KEYSPACE
});
client.connect((err) => {
  if (err) {
    console.error('There was an error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});
return client;
}