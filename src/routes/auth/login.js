import { p_two_req, p_one_req } from "../../config/agent";

export default async function(req, res) {
  try {
    const data = await p_two_req(
      "login",
      "post",
      JSON.stringify(req.body)
    ).then(res => res.json());

    const check_one = await p_one_req(
      "checkemail",
      "post",
      JSON.stringify({ email: req.body.email })
    ).then(res => res.json());

    if (data.status || check_one.status) {
      return res.status(200).json(data);
    }

    return res.status(200).json({
      status: false,
      message: "User does not exist"
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: `Something went wrong, please try again`
    });
  }
}
