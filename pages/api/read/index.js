import { getSortedPostData } from "../../../lib/posts";

//req.param;

export default function handler(req, res) {
  console.log(req.body);
  try {
    //const postData = getSortedPostData(deleted);

    res.status(200).send(postData);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
