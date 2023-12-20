const jwt = require("jsonwebtoken");
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

  async registerUser(req, res) {
    const { fullname, email, password } = req.body;

    // Kiểm tra xem email đã được sử dụng chưa
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    // Tạo một đối tượng User mới và lưu nó vào cơ sở dữ liệu
    const user = new Users({ fullname, email, password });
    await user.save();

    res.status(201).json({ user });
  }

  async loginUser(req, res) {}
}

module.exports = new UserController();
