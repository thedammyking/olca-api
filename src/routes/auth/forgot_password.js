import { p_two_req } from "../../config/agent";
import { mailgun_api_key, mailgun_domain } from "../../config";
const mailgun = require("mailgun-js")({
  apiKey: mailgun_api_key,
  domain: mailgun_domain
});

export default async function(req, res) {
  try {
    const data = await p_two_req(
      "checkemail",
      "post",
      JSON.stringify(req.body)
    ).then(res => res.json());

    if (!data.status) {
      res.status(200).json(data);
    }

    const mail_data = {
      from: "Olusola Lanre Coaching Academy(O.L.C.A) <no-reply@olcang.com>",
      to: req.body.email,
      subject: "Password Reset",
      text: `
        Please click on the link below to reset your passowrd \n
        http://127.0.0.1:5500/reset.html?token=${data.data.token}
        \n
        Disregard this mail if you did not request for password reset\n
      `
    };

    mailgun.messages().send(mail_data, (error, body) => {
      return res.status(200).json(body);
    });
  } catch (error) {
    console.log(error);
  }
}
