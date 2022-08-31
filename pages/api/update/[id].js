import { updatePost } from "../../../lib/update";

export default function handler(req, res) {
  console.log(req);
  try {
    updatePost(req.body, req.query.id);
    res.status(200).send({});
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
