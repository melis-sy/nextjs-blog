import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Layout from "../../components/layout";
import ToggleForm from "../../components/toggleForm";
import RecreateButton from "../../components/recreateButton";

const theme = createTheme({
  palette: { primary: { main: "#FF4040" }, secondary: { main: "#FF8888" } },
});

export default function CreateWrapper({ postData }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Layout>
          <RecreateButton toRecreate={true}></RecreateButton>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 4, md: 4 }, p: { xs: 4, md: 4 } }}
          >
            <ToggleForm></ToggleForm>
          </Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Layout>
      </Container>
    </ThemeProvider>
  );
}
