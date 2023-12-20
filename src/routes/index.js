const userRouter = require("./user");
const hotelRouter = require("./hotel");
const env = require("../config/env");

function route(app) {
  app.use(env.API_USERS, userRouter);
  app.use(env.API_HOTELS, hotelRouter);

  app.all("*", (req, res) => res.send("That route doesn't exist"));
}

module.exports = route;
