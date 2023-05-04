const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: `Alina's skills`
    })
}

function show(req, res) {
    // console.log(req.params)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skills details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: 'Edit skills',
        skill
    });
}
function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    edit,
    update
}