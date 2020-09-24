// Required 3rd Party Modules
const config = require(`config`);
const jwt = require(`jsonwebtoken`);

// Configuration Setup
const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const DURATION = config.get(`COOKIES.DURATION`);

// Databse Connection
const Registration = require(`../../database/models/registration`);

module.exports = (req, res) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  const { name, groupevents, email, mobile, game, college } = req.body;
  const type = req.params.type;
  const userData = {
    name,
    college,
    mobile,
    email,
    type,
    game,
    groupevents
  };
  const newRegistration = new Registration(userData);
  newRegistration.save().then(data => {
    jwt.sign({ data }, SECRET_KEY, { expiresIn: DURATION }, (err, token) => {
      res.cookie(`RegistrationToken`, token, { maxAge: DURATION });
      return res.redirect(`/payment?data=${token}`);
    });
  });
};
