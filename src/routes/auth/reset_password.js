// import { p_one_req, p_two_req } from "../../config/agent";

export default async function(req, res) {
  
    try {
      res.status(200).json({message: "Hello"});
    } catch (error) {
      console.log(error);
    }
  }
  