const HttpError = require("../models/Error");
const User = require("../models/User");

const getCase1Users = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return next(new HttpError("fetching users failed", 500));
  }

  res.status(200).json(users);
};

const getCase2Users = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return next(new HttpError("fetching users failed", 500));
  }

  res.status(200).json(users);
};

const getCase3Users = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return next(new HttpError("fetching users failed", 500));
  }

  res.status(200).json(users);
};

const getCase4Users = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return next(new HttpError("fetching users failed", 500));
  }

  res.status(200).json(users);
};

exports.getCase1Users = getCase1Users;
exports.getCase2Users = getCase2Users;
exports.getCase3Users = getCase3Users;
exports.getCase4Users = getCase4Users;
