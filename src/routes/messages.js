const express = require('express');
const router = express.Router();

// Sample route to render the message
router.get('/message/:id', (req, res) => {
    const messageId = req.params.id;
    const message = getMessageById(messageId); // Function to get message by ID
    if (message) {
        res.render('message', { message });
    } else {
        res.status(404).send('Message not found');
    }
});

// Function to simulate fetching a message by ID
function getMessageById(id) {
    // Sample data
    const messages = [
        { id: '1', user: 'Alice', text: 'Hello, world!', added: new Date() },
        { id: '2', user: 'Bob', text: 'Hi there!', added: new Date() }
    ];
    return messages.find(msg => msg.id === id);
}

module.exports = router;