import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content_md: String,
    content_html: String,
    grammar_check: mongoose.Schema.Types.Mixed
}, { timestamps: true })

const Notes = mongoose.model('Note', noteSchema)

export default Notes