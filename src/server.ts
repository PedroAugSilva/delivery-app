import express from "express";
import { engine } from "express-handlebars";
import { router } from "./routes";
import cors from "cors";

const app = express();
// app.use(cors);

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});


app.get("/employer/signup", (req, res) => {
  res.render("employer-signup");
});

app.get("/employer/signin", (req, res) => {
  res.render("employer-signin");
});




app.listen(3000, () =>
  console.log("servidor rodando da url: http://localhost:3000")
);
