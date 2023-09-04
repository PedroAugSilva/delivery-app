import express from "express";
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home');
});



app.listen(3000, () => console.log('servidor rodando da url: http://localhost:3000'))