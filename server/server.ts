import app from "./app";

const { PORT } = process.env;
if (!PORT) {
    process.exit(1);
  }

// const PORT = process.env.PORT;
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));