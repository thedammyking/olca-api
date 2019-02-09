import { p_one_req, p_two_req } from "../../config/agent";

export default async function(req, res) {
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

    return res.status(200).json(res_two);
  } catch (error) {
    console.log(error);
  }
}
