const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config;

const sendMail = async (contentHtml, email) => {

  // const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

  const CLIENT_ID =
    "1077631869308-iui2hkd43nicvuqrih4jj54jv4bfqbbg.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04znmjKCo-bVQCgYIARAAGAQSNwF-L9IrNsZulRnO66_1AvANf6vggQRoYY5olcEK8J-FlPbSDoedwa2bwbe-4g-MWI_zwuLkvdk";

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    // const contentHtml = `
    //   <h1>e-mail enviado con nodemailer</h1>
    //   <ul>
    //     <li>Welcome: ${userName}</li>
    //     <li>message: The service ${name} has been created successfully</li>
    //   </ul>`;

    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "freelanceworkerspf@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "<freelanceworkerspf@gmail.com>",
      to: `${email}`,
      subject: "Services",
      html: contentHtml,
    };
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
