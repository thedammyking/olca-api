import { p_one_req, p_two_req } from "../../config/agent";
import Mailgun from "mailgun-js";
import { mailgun_api_key, mailgun_domain } from "../../config";
import { passwordChange } from "../../config/mail_template";

export default async function(req, res) {
  const mailgun = new Mailgun({
    apiKey: mailgun_api_key,
    domain: mailgun_domain
  });

  try {
    const resp_two = await p_two_req(
      `reset/${req.body.token}`,
      "post",
      JSON.stringify({ password: req.body.password })
    ).then(res => res.json());

    const resp_one = await p_one_req(
      `reset/${req.body.token}`,
      "post",
      JSON.stringify({ users_password: req.body.password })
    ).then(res => res.json());

    if (resp_one.status && resp_two.status) {
      const mail_data = {
        from: "Olusola Lanre Coaching Academy(O.L.C.A) <no-reply@olcang.com>",
        to: resp_two.data.email,
        subject: "Password Changed",
        html: passwordChange()
      };

      return mailgun.messages().send(mail_data, (error, body) => {
        return res.status(200).json(resp_two);
      });
    }

    return res.status(200).json({
      status: false,
      message: "Something went wrong, please try again"
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: `Something went wrong, please try again`
    });
  }
}
