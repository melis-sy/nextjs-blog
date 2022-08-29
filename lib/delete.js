import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function deletePost(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  fs.unlinkSync(fullPath);
}
