const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));


const indexRouter = require('./src/routes/index');
const messagesRouter = require('./src/routes/messages');


app.use('/', indexRouter);
app.use('/', messagesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
