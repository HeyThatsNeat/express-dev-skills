import { Skill } from "../models/skill.js"

function index(req, res) {
    Skill.find({})
    .then(skills => {
        res.render('skills/index', {
            skills: skills,
            time: req.time
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

function skillsNew(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    req.body.isHunterSkill = false
    Skill.create(req.body)
    .then(skill => {
        console.log(skill)
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills/new')
    })
}

function show(req, res) {
    Skill.findById(req.params.skillId)
    .then(skill => {
        res.render('skills/show', {
            skill: skill
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills/new')
    })
}

function deleteSkill(req, res) {
    Skill.findByIdAndDelete(req.params.skillId)
    .then(skill => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}

export {
    index,
    skillsNew as new,
    create,
    show,
    deleteSkill as delete,
}