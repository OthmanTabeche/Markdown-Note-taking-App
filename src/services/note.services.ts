import Notes from "../models/notes.js"
import logger from "../utils/logger.js"
import check from "../utils/check.js";

// "lets users upload markdown files" POST /notes/upload
const uploadNoteMd = async (filename: string, content: Buffer) => {
    // Convertir buffer a string
    const contentMd = content.toString('utf-8');

    // Extraer título del nombre archivo
    const title = filename.replace('.md', '');

    // Guardar en MongoDB
    const note = new Notes({ title, content_md: contentMd });
    return await note.save();
}

// "check the grammar of the note" => POST / notes /: id / check - grammar
const checkGrammar = async (id: number, content: string) => {
    try {


    } catch (error) {

    }
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