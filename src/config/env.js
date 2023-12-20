require("dotenv").config();

const env = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  // API người dùng
  API_USERS: process.env.API_USERS,
  USER_READ: process.env.USER_READ,
  USER_CREATE: process.env.USER_CREATE,
  USER_UPDATE: process.env.USER_UPDATE,

  // API Khách sạn
  API_HOTELS: process.env.API_HOTELS,
  HOTEL_READ: process.env.HOTEL_READ,
};

module.exports = env;
