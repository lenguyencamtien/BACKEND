// const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");

class UserController {
  async readUser(req, res) {
    try {
      const userList = await Users.find();
      res.status(200).json(userList);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async createUser(req, res) {}
  async updateUser(req, res) {}
}

module.exports = new UserController();
