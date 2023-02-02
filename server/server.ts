import app from "./app";
import { PORT } from "./constants/server.constants"

// const PORT = process.env.PORT;
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));