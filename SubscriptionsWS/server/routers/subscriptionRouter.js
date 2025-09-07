const express = require('express');
const subscriptionService = require('../services/subscriptionService');

const router = express.Router();

// Entry Point: /subscription


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const subscription = await subscriptionService.getSubscriptionById(id);
    res.send(subscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const subObj = req.body;
    const newSub = await subscriptionService.addSubscription(subObj);
    res.status(201).send(`The new ID : ${newSub._id}`);
  } catch (error) {
    res.status(500).send(error.errors.name.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const subObj = req.body;
    const updatedSub = await subscriptionService.updateSubscription(id, subObj);
    res.send(updatedSub);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prevSub = await subscriptionService.deleteSubscription(id);
    res.send(prevSub);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;