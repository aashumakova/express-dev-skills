const skills = [
    { id: 125223, skill: 'Java Script', done: true },
	{ id: 127904, skill: 'Learn Express', done: false },
	{ id: 139608, skill: 'Ask for help', done: true },
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne
}