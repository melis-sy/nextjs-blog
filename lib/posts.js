import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData(deleted) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = [];

  console.log(fileNames);

  for (const fileName of fileNames) {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Save Markdown-Content
    const markdownContent = matterResult.content;

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const content = processedContent.toString();

    console.log("getSortedPostsData", {
      id,
      //content,
      //markdownContent,
      data: matterResult.data,
    });

    //Combine the data with the id
    if (deleted) {
      if (matterResult.data.isDeleted) {
        allPosts.push({
          id,
          ...matterResult.data,
          markdownContent,
          content,
        });
      }
    } else {
      if (!matterResult.data.isDeleted) {
        allPosts.push({
          id,
          ...matterResult.data,
          markdownContent,
          content,
        });
      }
    }

    console.log("allPosts", allPosts);

    // Sort posts by date
  }
  return allPosts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  console.log("matterResult", matterResult);

  // Save Markdown-Content
  const markdownContent = matterResult.content;

  //Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();

  // Combine the data with the id and content
  return {
    id,
    content,
    markdownContent,
    ...matterResult.data,
  };
}
