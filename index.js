const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/users.route");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.get("/user", (req, res) => {
  res.send("Assalamu alikum bro. Welcome to the world");
});
app.use((req, res) => {
  res.status(404).json({
    message: " 404 not found",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
