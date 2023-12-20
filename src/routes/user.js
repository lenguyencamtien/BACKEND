const express = require("express");
const router = express.Router();
const env = require("../config/env");

const userController = require("../app/controller/userController");

router.get(env.USER_READ, userController.readUser);
router.post(env.USER_CREATE, userController.createUser);
router.put(env.USER_UPDATE, userController.updateUser);

module.exports = router;
