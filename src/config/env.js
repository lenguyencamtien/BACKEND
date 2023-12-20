require("dotenv").config();

const env = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  // API người dùng
  API_USERS: process.env.API_USERS,
  USER_READ: process.env.USER_READ,
  USER_REGISTER: process.env.USER_REGISTER,
  USER_LOGIN: process.env.USER_LOGIN,
  JWT_SECRET: process.env.JWT_SECRET,
  UPDATE_ROLE: process.env.UPDATE_ROLE,

  // API Khách sạn
  API_HOTELS: process.env.API_HOTELS,
  HOTEL_READ: process.env.HOTEL_READ,
};

module.exports = env;
