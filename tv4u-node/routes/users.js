const express = require("express");
const usersController = require("../controllers/users");

const Router = express.Router();

Router.post("/register", usersController.userRegister); // To register a new User
Router.post("/login", usersController.userLogin);   // To login a user
Router.put("/user/:id/update-username", usersController.updateUsername) // Update username
Router.put("/user/:id/update-password", usersController.updatePassword) // Update password

module.exports = Router;
