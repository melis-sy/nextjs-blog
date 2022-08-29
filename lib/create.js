import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

function createPost(title, content) {
  fs.appendFile(`${postsDirectory}/${title}.md`, `${content}`, function (err) {
    if (err) throw err;
    console.log("Der Post wurde erfolgreich angelegt.");
  });
}
