// Required 3rd Party Modules
const config = require(`config`);
const jwt = require(`jsonwebtoken`);

// Configuration Setup
const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);

module.exports = (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { data } = req.query;
  if (!data) {
    return res.status(401).render(`/`);
  }
  jwt.verify(data, SECRET_KEY, (err, authData) => {
    if (err) {
      return res.status(401).redirect(`/`);
    }
    return res.render(`checkout`);
  });
};
