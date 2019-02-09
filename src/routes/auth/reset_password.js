import { p_one_req, p_two_req } from "../../config/agent";

export default async function(req, res) {
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

    res.status(200).json(resp_two);
  } catch (error) {
    console.log(error);
  }
}
