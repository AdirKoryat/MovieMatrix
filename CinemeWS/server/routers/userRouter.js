const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

// Entry Point: /user


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const userObj = req.body;
    const newUser = await userService.addUser(userObj);
    res.status(201).send(`The new ID : ${newUser._id}`);
  } catch (error) {
    res.status(500).send(error.errors.name.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userObj = req.body;
    const updatedUser = await userService.updateUser(id, userObj);
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prevUser = await userService.deleteUser(id);
    res.send(prevUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;