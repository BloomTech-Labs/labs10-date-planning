const nodemailer = require('nodemailer');
// const postmark = require('postmark'); // will use when we wanna send actual emails

// setup nodemailer service to send test emails
const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	}
});

// format email with some really simple css n html
const formatEmail = text => `
  <div className="email" style="
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  line-height: 2;
  font-size: 20px;
  ">
  <h2>Hey from your friends at Up4!</h2>
  <p>${text}</p>
  <p>Love, \n The Up4 Team</p>
  </div>
`;

module.exports = {
	transport,
	formatEmail
};
