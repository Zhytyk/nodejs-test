const express = require('express');
const homeController = require('./controllers/HomeController');
const userController = require('./controllers/UserController');
const errorController = require('./controllers/ErrorController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', homeController.index);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUser);
app.use(errorController.handleError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))