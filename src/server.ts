import express from "express";
import { engine } from "express-handlebars";
import { router } from "./routes";

const app = express();

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
app.get("/product-register", (req, res) => {
  res.render("product-register");
});


app.get("/employee/signup", (req, res) => {
  res.render("employee-signup");
});

app.get("/employee/signin", (req, res) => {
  res.render("employee-signin");
});




app.listen(3000, () =>
  console.log("servidor rodando da url: http://localhost:3000")
);
