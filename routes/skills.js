const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skills')
// URL in the browser to point to 
// get request local host:3000/skills

router.get('/', skillController.index)
// this has to be above /:id
router.get('/new', skillController.newSkill)
// GET request going to a local host 3000/skills/125223
// since this is a get request we need to get the user ID somehow. This how is a url param
// we can call ':id' whatever we want just as long as we then refer to it as what we named it req.params.id
router.get('/:id', skillController.show)
router.get('/:id/edit', skillController.edit)

router.post('/', skillController.create)
router.delete('/:id', skillController.deleteSkill)
router.put('/:id', skillController.update)

// if there us only one export you do not need the object
module.exports = router