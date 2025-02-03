const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRouter = require('./src/routes/index');
const messagesRouter = require('./src/routes/messages');

// Use routes
app.use('/', indexRouter);
app.use('/', messagesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});