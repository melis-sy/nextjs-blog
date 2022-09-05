import fs from "fs";
import path from "path";
import { getPostData } from "./posts";

const postsDirectory = path.join(process.cwd(), "posts");

export async function deletePost(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  //fs.unlinkSync(fullPath);

  const postData = await getPostData(id);

  console.log("Delete: ", postData);

  const content = concatContent(
    postData.title,
    postData.description,
    postData.link,
    postData.markdownContent,
    true
  );

  fs.writeFile(
    `${postsDirectory}/${postData.title}.md`,
    `${content}`,
    function (err) {
      if (err) throw err;
      console.log("Der Post wurde erfolgreich überarbeitet");
    }
  );
}

function getDateToday() {
  let date = new Date();
  let dateToday = date.toISOString().substring(0, 10);
  return dateToday;
}

function concatContent(title, description, linkText, content, deleteState) {
  const markdownStart = "";
  const separator = "---";
  const isDeleted = `isDeleted: ${deleteState}`;
  const breakLine = "\n";
  const titleMark = `title: "${title.trim()}"`;
  const dateMark = `date: "${getDateToday()}"`;
  const image = `image: "https://source.unsplash.com/random?blue,nature"`;
  const descriptionMark = `description: "${description}"`;
  const linkTextMark = `link: "${linkText}"`;
  const contentMark = content;
  const markdownContent = markdownStart.concat(
    separator,
    breakLine,
    isDeleted,
    breakLine,
    titleMark,
    breakLine,
    dateMark,
    breakLine,
    image,
    breakLine,
    descriptionMark,
    breakLine,
    linkTextMark,
    breakLine,
    separator,
    breakLine,
    breakLine,
    contentMark
  );
  console.log("MarkdownInhalt", markdownContent);
  return markdownContent;
}
