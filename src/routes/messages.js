const express = require('express');
const router = express.Router();

router.get('/message/:id', (req, res) => {
    const messageId = req.params.id;
    const message = getMessageById(messageId); 
    if (message) {
        res.render('message', { message });
    } else {
        res.status(404).send('Message not found');
    }
});


function getMessageById(id) {
  
    const messages = [
        { id: '1', user: 'Alice', text: 'Hello, world!', added: new Date() },
        { id: '2', user: 'Bob', text: 'Hi there!', added: new Date() }
    ];
    return messages.find(msg => msg.id === id);
}

module.exports = router;