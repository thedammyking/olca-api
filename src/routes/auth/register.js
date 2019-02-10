import { p_one_req, p_two_req } from "../../config/agent";
import Mailgun from "mailgun-js";
import { mailgun_api_key, mailgun_domain } from "../../config";
import { appreciate } from "../../config/mail_template";

export default async function(req, res) {
  const mailgun = new Mailgun({
    apiKey: mailgun_api_key,
    domain: mailgun_domain
  });

  const req_body_one = {
    users_name: `${req.body.firstname} ${req.body.lastname}`,
    users_email: req.body.email,
    users_phone: req.body.mobile,
    users_password: req.body.password
  };
  try {
    const check_one = await p_one_req(
      "checkemail",
      "post",
      JSON.stringify({ email: req.body.email })
    ).then(res => res.json());

    const check_two = await p_two_req(
      "checkemail",
      "post",
      JSON.stringify({ email: req.body.email })
    ).then(res => res.json());

    if (check_one.status || check_two.status) {
      return res.status(200).json({
        status: false,
        message: `User with email: ${req.body.email} aleady exist`
      });
    }

    const res_one = await p_one_req(
      "register",
      "post",
      JSON.stringify(req_body_one)
    ).then(res => res.json());

    const res_two = await p_two_req(
      "register",
      "post",
      JSON.stringify(req.body)
    ).then(res => res.json());

    if (res_one.status && res_two.status) {
      const mail_data = {
        from: "Olusola Lanre Coaching Academy(O.L.C.A) <no-reply@olcang.com>",
        to: req.body.email,
        subject: "Welcome",
        html: appreciate(req.body.firstname)
      };

      return mailgun.messages().send(mail_data, (error, body) => {
        return res.status(200).json(res_two);
      });
    }

    return res.status(200).json(res_two);
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: `Something went wrong, please try again`
    });
  }
}
