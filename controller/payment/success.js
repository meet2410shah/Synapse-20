// Required 3rd Party Modules
const config = require(`config`);
const jwt = require(`jsonwebtoken`);
const checksum_lib = require(`../paytm/checksum`);

// Database Connection
const Registration = require(`../../database/models/registration`);

// Required 3rd Party Modules
const nodemailer = require(`nodemailer`);
const { google } = require(`googleapis`);
const Oauth2 = google.auth.OAuth2;

// Configuration Setup
const SYNAPSE_EMAIL = config.get(`MAIL.EMAIL`);
const CLIENT_ID = config.get(`MAIL.CLIENT_ID`);
const CLIENT_SECRET = config.get(`MAIL.CLIENT_SECRET`);
const REDIRECT_URL = config.get(`MAIL.REDIRECT_URL`);
const REFRESH_TOKEN = config.get(`MAIL.REFRESH_TOKEN`);
const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const MKEY = config.get(`PAYMENT.MKEY`);

// OAuth2 CLient Setup
const oauth2Client = new Oauth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});

module.exports = (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  let paytmChecksum = "";
  let paytmParams = {};
  const {
    CURRENCY,
    GATEWAYNAME,
    RESPMSG,
    BANKNAME,
    PAYMENTMODE,
    MID,
    RESPCODE,
    TXNID,
    TXNAMOUNT,
    ORDERID,
    STATUS,
    BANKTXNID,
    EMAIL,
    MOBILE_NO,
    TXNDATE,
    CHECKSUMHASH
  } = req.body;
  received_data = {
    CURRENCY,
    GATEWAYNAME,
    RESPMSG,
    BANKNAME,
    PAYMENTMODE,
    MID,
    RESPCODE,
    TXNID,
    TXNAMOUNT,
    ORDERID,
    STATUS,
    BANKTXNID,
    EMAIL,
    MOBILE_NO,
    TXNDATE,
    CHECKSUMHASH
  };
  for (var key in received_data) {
    if (key == "CHECKSUMHASH") {
      paytmChecksum = received_data[key];
    } else {
      paytmParams[key] = received_data[key];
    }
  }
  var isValidChecksum = checksum_lib.verifychecksum(
    paytmParams,
    MKEY,
    paytmChecksum
  );
  if (isValidChecksum || STATUS == "TXN_SUCCESS") {
    const { RegistrationToken } = req.cookies;
    jwt.verify(RegistrationToken, SECRET_KEY, (err, authData) => {
      if (err) {
        return res.status(401).redirect(`/`);
      } else {
        const { _id } = authData.data;
        Registration.findByIdAndUpdate(
          _id,
          { order_id: ORDERID, payment: true },
          { new: true },
          (err, result) => {
            if (!result) {
              return res.send("We will send you an email soon. :)");
            }
            const accessToken = oauth2Client.getAccessToken();
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                type: "OAuth2",
                user: SYNAPSE_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
              }
            });
            transporter.sendMail(
              {
                from: `Team Synapse <${SYNAPSE_EMAIL}>`,
                to: `${result.email}`,
                subject: "Welcome to Synapse 2020",
                html: `
              <div style="padding: 5%; box-shadow: 0px 0px 2px 5px #aaa">
                  <div style="background-color: #DFE0D4; padding: 20px; display: flex; justify-content: center; align-items: center;">
                      <img src="cid:synapse" height="73px" width="80px" style="margin: auto 0px; min-width: 80px !important;"/>    
                      <h1 style="padding-left: 20px">Welcome to Synapse 2020</h1>
                  </div>
                  <div style="background-color: #EFEFED; padding: 5%">
                      <p style="font-size: 14px">
                          Dear ${result.name}, <br>
                          <br>
                          We’d love to see you among us at Synapse 2020.
                          <br>
                          <br>
                          Your Order Id: ${ORDERID}
                          <br>
                          <br>
                          Team Synapse
                      </p>
                  </div>
                  <div style="background-color: #DFE0D4; padding: 20px; display: flex; justify-content: center; align-items: center;">
                      <p style="font-size: 14px; display: block;">
                          Follow Us for Latest Update:
                      </p>
                      <div style="background-color: #ffffff; border: 2px solid red; border-radius: 50%; height: 32px; width:32px; margin-left: 10px; margin-top: 4px">
                          <img src="cid:fb" height="20px" width="20px" style="margin: 6px" >
                      </div>
                      <div style="background-color: #ffffff; border: 2px solid red; border-radius: 50%; height: 32px; width:32px; margin-left: 10px; margin-top: 4px">
                          <img src="cid:insta" height="20px" width="20px" style="margin: 6px" >
                      </div>
                  </div>
              </div>
              `,
                attachments: [
                  {
                    filename: "logo.png",
                    path: "./public/images/logo.png",
                    cid: "synapse"
                  },
                  {
                    filename: "fb.png",
                    path: "./public/images/fb.png",
                    cid: "fb"
                  },
                  {
                    filename: "insta.png",
                    path: "./public/images/insta.png",
                    cid: "insta"
                  }
                ]
              },
              (err, info) => {
                if (err) {
                  return res.send(`ERROR ${err}`);
                }
                return res.send(`success`);
              }
            );
          }
        );
      }
    });
  } else {
    const RegistrationToken = req.cookies;
    res.redirect(`/payment?data=${RegistrationToken}`);
  }
};
