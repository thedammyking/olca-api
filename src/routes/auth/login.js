import { p_two_req } from "../../config/agent";

export default async function(req, res) {
  try {
    const data = await p_two_req(
      "login",
      "post",
      JSON.stringify(req.body)
    ).then(res => res.json());

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}
