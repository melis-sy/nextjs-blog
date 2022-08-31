import * as React from "react";
import { TextField, Grid, Button } from "@mui/material";
import utilStyles from "../styles/utils.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useRouter } from "next/router";

function UpdateForm(props) {
  const { post } = props.post;

  const [title, setTitle] = React.useState(props.post.title);
  const [description, setDescription] = React.useState(props.post.description);
  const [linkText, setLinkText] = React.useState(props.post.link);
  const [content, setContent] = React.useState(props.post.markdownContent);

  const router = useRouter();

  async function handleSubmit() {
    await axios.put(`/api/update/${props.post.title}`, {
      title,
      description,
      linkText,
      content,
    });
    router.push(`/posts/${title}.md`);
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
            value={linkText}
            onChange={(event) => setLinkText(event.target.value)}
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
            value={content}
            onChange={(event) => setContent(event.target.value)}
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
            onClick={() => handleSubmit()}
          >
            Erstellen
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default UpdateForm;
