import cassandra from 'cassandra-driver';

const {NODE_IP, DATA_CENTER, KEYSPACE} = process.env;

if (!NODE_IP || !DATA_CENTER || !KEYSPACE) {
  process.exit(1);
}

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