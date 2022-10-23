const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/users.route");
const productsRouter = require("./routes/products.route");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productsRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.status(404).json({
    message: " 404 not found",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
