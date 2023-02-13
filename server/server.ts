import app from "./app";
import * as dotEnv from "dotenv";
dotEnv.config();

let PORT = process.env.PORT || 4000;

// const PORT = process.env.PORT;
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));