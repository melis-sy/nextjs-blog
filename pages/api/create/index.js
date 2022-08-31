import { createPost } from "../../../lib/create";

//req.param;

export default function handler(req, res) {
  console.log(req.body);
  try {
    createPost(req.body);
    res.status(200).send({});
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
