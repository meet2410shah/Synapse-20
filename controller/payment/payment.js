// Required 3rd Party Modules
const config = require(`config`);
const jwt = require(`jsonwebtoken`);
const checksum_lib = require(`../paytm/checksum`);

// Configuration Setup
const SECRET_KEY = config.get(`COOKIES.SECRET_KEY`);
const URL = config.get(`SERVER.URL`);
const MID = config.get("PAYMENT.MID");
const MKEY = config.get("PAYMENT.MKEY");

module.exports = (req, res) => {
  res.set(`Cache-Control`, `no-cache, no-store, must-revalidate`);
  const { RegistrationToken } = req.cookies;
  jwt.verify(RegistrationToken, SECRET_KEY, (err, authData) => {
    if (err) {
      return res.status(401).redirect(`/`);
    } else {
      const { type, game, email, groupevents, mobile } = authData.data;
      const myRandom = Math.random() * 10e16;
      const ORDER_ID = `SYNAPSE2020_${myRandom}`;
      const CUST_ID = `SYNAPSE2020_${myRandom}`;
      const MOBILE_NO = `${mobile}`;
      const EMAIL = `${email}`;
      let TXN_AMOUNT = "100.00";
      // AMOUNT SELECTION;
      if (type === "synapse100pass") {
        TXN_AMOUNT = "100.00";
      } else if (type === "battledrone") {
        switch (parseInt(game)) {
          case 1:
            TXN_AMOUNT = "20.00";
            break;
          case 2:
            TXN_AMOUNT = "40.00";
            break;
          case 3:
            TXN_AMOUNT = "30.00";
            break;
          case 4:
            TXN_AMOUNT = "30.00";
            break;
          case 5:
            TXN_AMOUNT = "100.00";
            break;
          case 6:
            TXN_AMOUNT = "40.00";
            break;
          case 7:
            TXN_AMOUNT = "200.00";
            break;
          case 8:
            TXN_AMOUNT = "100.00";
            break;
          case 9:
            TXN_AMOUNT = "40.00";
            break;
          default:
            res.redirect(`/register/${type}`);
            break;
        }
      } else if (type === "djwars") {
        TXN_AMOUNT = "200.00";
      } else if (type === "group-events") {
        console.log("Hello");
        console.log(groupevents);
        switch (parseInt(groupevents)) {
          case 1:
            TXN_AMOUNT = "1000.00";
            break;
          case 2:
            TXN_AMOUNT = "200.00";
            break;
          case 3:
            TXN_AMOUNT = "200.00";
            break;
          case 4:
            TXN_AMOUNT = "200.00";
            break;
          case 5:
            TXN_AMOUNT = "100.00";
            break;
          case 6:
            TXN_AMOUNT = "200.00";
            break;
          case 7:
            TXN_AMOUNT = "300.00";
            break;
          case 8:
            TXN_AMOUNT = "100.00";
            break;
          case 9:
            TXN_AMOUNT = "200.00";
            break;
          case 10:
            TXN_AMOUNT = "300.00";
            break;
          case 11:
            TXN_AMOUNT = "300.00";
            break;
          default:
            res.redirect(`/register/${type}`);
            break;
        }
      }
      const CALLBACK_URL = `${URL}/payment/success`;

      // Set paytmParams
      var paytmParams = {
        MID, // Merchannt ID - String (20)
        CHANNEL_ID: "WEB", // String (3) Theme based on the channel
        WEBSITE: "DEFAULT", // String (30)
        INDUSTRY_TYPE_ID: "Retail", // String (20)
        ORDER_ID, // Unique OrderID - String (50)
        CUST_ID, // Unique CustomerID - String (64)
        TXN_AMOUNT, // String (10)
        // CHECKSUMHASH: "", // String (108) This will be generated in the following code.
        MOBILE_NO, // String (15)
        EMAIL, // String (50)
        CALLBACK_URL
      };

      // Generate CHECKSUMHASH
      checksum_lib.genchecksum(paytmParams, MKEY, (err, checksum) => {
        var url = "https://securegw.paytm.in/order/process";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Merchant Checkout Page</title>");
        res.write("</head>");
        res.write("<body>");
        res.write(
          "<center><h1>Please do not refresh this page...</h1></center>"
        );
        res.write(
          '<form method="post" action="' + url + '" name="paytm_form">'
        );
        for (var x in paytmParams) {
          res.write(
            '<input type="hidden" name="' +
              x +
              '" value="' +
              paytmParams[x] +
              '">'
          );
        }
        res.write(
          '<input type="hidden" name="CHECKSUMHASH" value="' + checksum + '">'
        );
        res.write("</form>");
        res.write('<script type="text/javascript">');
        res.write("document.paytm_form.submit();");
        res.write("</script>");
        res.write("</body>");
        res.write("</html>");
        res.end();
      });
    }
  });
};
