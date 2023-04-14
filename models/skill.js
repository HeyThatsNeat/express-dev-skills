import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
    text: String
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
    Skill
}
