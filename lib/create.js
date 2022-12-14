import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

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

export function createPost(bodyContent) {
  console.log(bodyContent.linkText);
  const content = concatContent(
    bodyContent.title,
    bodyContent.description,
    bodyContent.linkText,
    bodyContent.content,
    false
  );

  console.log("wat is im content", content);

  fs.appendFile(
    `${postsDirectory}/${bodyContent.title}.md`,
    `${content}`,
    function (err) {
      if (err) throw err;
      console.log("Der Post wurde erfolgreich angelegt.");
    }
  );
}
