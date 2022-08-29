import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainFeaturedPost from "../components/MainFeaturedPost";
import { getPostData } from "../lib/posts";
import FeaturedPost from "../components/featuredPost";
import Main from "../components/main";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Sidebar from "../components/Sidebar";

const theme = createTheme({ palette: { primary: { main: "#476500" } } });

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const postData = await getPostData(allPostsData[0].id);

  return {
    props: {
      allPostsData,
      postData,
    },
  };
}

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Home({ allPostsData, postData }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <MainFeaturedPost post={postData} />
        <Grid container spacing={4}>
          {allPostsData.map((post) => (
            <Grid key={post.title} item xs={12} md={6}>
              <FeaturedPost post={post} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={allPostsData} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}></small>
            </li>
          ))}
        </ul>
      </Container>
    </ThemeProvider>
  );
}
