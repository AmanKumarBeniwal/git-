module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/store', notes.create);

    // Retrieve all Notes
    app.get('/stores', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/stores/:storeid', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:storeid', notes.update);

    
    // Delete a Note with noteId
    app.delete('/notes/:storeid', notes.delete);
}