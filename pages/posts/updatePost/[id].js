import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UpdateForm from "../../../components/updateForm";

const theme = createTheme({});
export default function UpdateWrapper({ postData }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Layout>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 4, md: 4 }, p: { xs: 4, md: 4 } }}
          >
            <UpdateForm id={postData.id}></UpdateForm>
          </Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Layout>
      </Container>
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