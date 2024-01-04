
const { Router } = require ("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController()

console.log("Notes routes are initialized.");

notesRoutes.get ("/", notesController.index)
notesRoutes.post ("/:user_id", notesController.create)
notesRoutes.get ("/:id", notesController.show);
notesRoutes.delete ("/:id", notesController.delete);
notesRoutes.put('/:id', notesController.update);




module.exports = notesRoutes; 