import { skills } from '../data/skills_data.js'

function index(req, res) {
    res.render('skills/index', {
        skills: skills
    })
}

export {
    index,
}