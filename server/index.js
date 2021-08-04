// MODULES
const express = require("express");
const cors = require("cors");

require("dotenv/config");
// SCRIPTS
const connectDB = require("./scripts/connectDB");
const mailer = require("./scripts/mailer");

// SET UP EXPRESS
const app = express();

// TRUST FIRST PROXY (FOR SSL REVERSE PROXY WITH NGINX IN PRODUCTION)
if (process.env.NODE_ENV === "production") {
  app.set('trust proxy', 1)
}

// CONNECTS TO DATABASE
connectDB();

// INITIALIZE EMAIL TRANSPORTER FOR NODEMAILER
transporter = mailer.start();
transporter.verify((error, success) => {
  if (error) {
    console.log(`Mailer error: ${error}`);
  } else {
    console.log(`Mailer ready`);
  }
});

// BASIC MIDDLEWARE FOR CROSS ORIGIN REQUESTS AND FORM HANDLING IN REQUESTS.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// API ROUTE HANDLERS
const eventRegistrationRoute = require("./routes/eventRegistration");
app.use("/api/event-registration", eventRegistrationRoute);
const signUpRoute = require("./routes/signUp");
app.use("/api/sign-up", signUpRoute);
const paymentRoute = require("./routes/payment");
app.use("/api/payment", paymentRoute);

// CATCH-ALL ROUTER FOR VUE. NECESSARY FOR SINGLE PAGE APPLICATION ROUTING. API/BACKEND ROUTES MUST BE HANDLED BEFORE THIS.
app.use(express.static(`${__dirname}/public`));
app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// EXPOSE PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
