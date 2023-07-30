const { Router } = require('express');
const controller = require('../controllers/task');

const router = Router();

router.get('/tasks', controller.getAll);
router.post('/tasks', controller.create);
router.patch('/tasks/:id', controller.update);
router.delete('/tasks/:id', controller.delete);


module.exports = router;
