const path = require(`path`);
// Database Connection
const connection = require(`./database/connection`);

// Required 3rd Party Modules
const cookieParser = require(`cookie-parser`);
const favicon = require(`serve-favicon`);

// Configuration Setup
const config = require(`config`);
const PORT = process.env.PORT || config.get(`SERVER.PORT`);

// Express App Setup
const express = require(`express`);
const app = express();

// Express App Settings
app.set(`view engine`, `ejs`);

// Express App Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// Required Routes
const register = require(`./routes/register`);
const payment = require(`./routes/payment`);
const index = require(`./routes/index`);

// Express Routes
app.use(`/register`, register);
app.use(`/payment`, payment);
app.get(`/`, index);

app.listen(PORT);
