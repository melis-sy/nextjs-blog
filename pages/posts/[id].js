import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Buttongroup from "../../components/buttonGroup";

const theme = createTheme({});

export default function Post({ postData }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Buttongroup id={postData.id} />
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
        </article>
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log("PostDaten", postData);

  return {
    props: {
      postData,
    },
  };
}
