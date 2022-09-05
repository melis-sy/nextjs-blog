import { recreatePost } from "../../../lib/recreate";

export default function handler(req, res) {
  console.log(req);
  try {
    recreatePost(req.query.id);
    res.status(200).send({});
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
