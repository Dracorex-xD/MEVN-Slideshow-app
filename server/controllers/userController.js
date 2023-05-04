const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});

  res.status(200).json(user);
});

const postUsers = asyncHandler(async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400);
    throw new Error('please enter your username and password');

  }
  const user = await User.create({
      username: req.body.username,
      password: req.body.password,
  })
  res.status(200).json(user);
});
//update
const updateUsers = asyncHandler(async (req, res) => {
  const user = await User.find({ _id: req.params.id });
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        });

    res.status(200).json(updatedUser);
})


module.exports = {
  getUsers,
  postUsers,
  updateUsers,
}