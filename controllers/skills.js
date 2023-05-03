const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    // console.log(req.params)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

module.exports = {
    index,
    show
}