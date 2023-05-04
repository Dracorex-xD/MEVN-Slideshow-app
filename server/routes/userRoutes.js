const express = require('express');
const router = express.Router();
const {
  getUsers,
  postUsers,
  updateUsers,
} = require('../controllers/userController');


router.route('/Slideshow/').get(getUsers).post(postUsers);
router.route('/Slideshow/:id').put(updateUsers);

module.exports = router;