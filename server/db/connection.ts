import cassandra from 'cassandra-driver';
import {NODE_IP, DATA_CENTER, KEYSPACE} from "../constants/server.constants"

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