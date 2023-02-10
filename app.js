const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/', (req, res) => {
    res.render('aboutus');
});

app.get('/', (req, res) => {
    res.render('services');
});

app.get('/', (req, res) => {
    res.render('products');
});
app.set('view engine', 'ejs');