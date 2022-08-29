import { deletePost } from "../../../lib/delete";

export default function handler(req, res) {
  console.log(req);
  try {
    deletePost(req.query.id);
    res.status(200).send({});
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
