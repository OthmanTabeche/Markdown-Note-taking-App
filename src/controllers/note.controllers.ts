import noteServices from "../services/note.services.js"
import logger from "../utils/logger.js"

// "lets users upload markdown files" POST /notes/upload
const uploadNoteMd = async () => {

}

// "check the grammar of the note" => POST / notes /: id / check - grammar
const checkGrammar = async () => {

}

// "save the note that can be passed in as Markdown text" => POST / notes
const saveNote = async () => {

}

// "list the saved notes" => GET / notes
const listAllNotes = async () => {

}

// "Return the HTML version of the Markdown note" => GET / notes /: id / html
const noteHTML = async () => {

}

export default { uploadNoteMd, checkGrammar, saveNote, listAllNotes, noteHTML }