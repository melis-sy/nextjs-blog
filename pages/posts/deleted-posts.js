import Head from "next/head";
import { siteTitle } from "../../components/layout";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { getSortedPostsData } from "../../lib/posts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RecreateButton from "../../components/recreateButton";

import { Typography } from "@mui/material";
import DeletedPost from "../../components/deletedPost";

const theme = createTheme({
  palette: { primary: { main: "#FF4040" }, secondary: { main: "#FF8888" } },
});

export async function getStaticProps() {
  const deleted = true;
  const allPostsData = await getSortedPostsData(deleted);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <RecreateButton toRecreate={false}></RecreateButton>
        <Typography variant="h2" sx={{ mt: 5 }} gutterBottom>
          Alle gelöschten Posts
        </Typography>
        <Grid container spacing={4}>
          {allPostsData.map((post) => (
            <Grid key={post.id} item xs={12} md={6}>
              <DeletedPost post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
