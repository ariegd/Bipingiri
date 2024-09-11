const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();
router.post('/', userController.createUser);
router.get('/', userController.readAllUser);
router.get('/:id', userController.readUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;