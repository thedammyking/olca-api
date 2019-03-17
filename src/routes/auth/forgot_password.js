import { p_two_req, p_one_req } from "../../config/agent";
import Mailgun from "mailgun-js";
import { mailgun_api_key, mailgun_domain } from "../../config";
import { passwordReset } from "../../config/mail_template";

export default async function(req, res) {
  const mailgun = new Mailgun({
    apiKey: mailgun_api_key,
    domain: mailgun_domain
  });

  const redirect = req.body.redirect;

  delete req.body.redirect;

  try {
    const data = await p_two_req(
      "checkemail",
      "post",
      JSON.stringify(req.body)
    ).then(res => res.json());

    const check_one = await p_one_req(
      "checkemail",
      "post",
      JSON.stringify({ email: req.body.email })
    ).then(res => res.json());

    if (!data.status || !check_one.status) {
      return res.status(200).json({
        status: false,
        message: "User does not exist"
      });
    }

    const mail_data = {
      from: "Olusola Lanre Coaching Academy(O.L.C.A) <no-reply@olcang.com>",
      to: req.body.email,
      subject: "Password Reset",
      html: passwordReset(
        `http://accounts.olcang.com/reset.html?token=${
          data.data.token
        }&redirect=${redirect}`
      )
    };

    return mailgun.messages().send(mail_data, (error, body) => {
      return res.status(200).json({status: true, ...body});
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: `Something went wrong, please try again`
    });
  }
}
