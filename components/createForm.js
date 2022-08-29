import * as React from "react";
import { TextField, Grid, Button } from "@mui/material";
import utilStyles from "../styles/utils.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

function CreateForm() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [linkText, setLinkText] = React.useState("");
  const [content, setContent] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("/api/create", { title });
  }
  return (
    <Grid container spacing={3} sx={{ my: { xs: 4, md: 4 } }}>
      <form
        onSubmit={handleSubmit}
        className={utilStyles.paddingNormal}
        style={{ width: "100%" }}
      >
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            label="Post-Titel"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 4, md: 4 } }}>
          <TextField
            required
            id="description"
            name="description"
            label="Kurzbeschreibung"
            maxRows={3}
            fullWidth
            variant="standard"
            multiline
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 4, md: 4 } }}>
          <TextField
            required
            id="linkText"
            name="linkText"
            label="Linktext"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 4, md: 4 } }}>
          <TextField
            required
            id="content"
            name="content"
            label="Post-Inhalt"
            fullWidth
            variant="standard"
            multiline
            minRows={5}
            maxRows={7}
          />

          <Button
            sx={{ my: { xs: 4, md: 4 } }}
            variant="outlined"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default CreateForm;
