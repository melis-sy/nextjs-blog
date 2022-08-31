import * as React from "react";
import { TextField, Grid, Button } from "@mui/material";
import utilStyles from "../styles/utils.module.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useRouter } from "next/router";

function ToggleForm(props) {
  const post = props.post;
  const isUpdate = props.isUpdate;
  console.log("Aktuelle Postdaten: ", post);
  console.log("Is Update: ", isUpdate);

  //React.useState(post.title || "")
  const [title, setTitle] = React.useState(isUpdate ? post.title : "");

  const [description, setDescription] = React.useState(
    isUpdate ? post.description : ""
  );
  const [linkText, setLinkText] = React.useState(isUpdate ? post.link : "");
  const [content, setContent] = React.useState(
    isUpdate ? post.markdownContent.trimStart() : ""
  );
  const [error, setError] = React.useState(isUpdate ? false : true);

  /*React.useEffect(() => {
    if (isUpdate) {
      () => {
        setTitle(post.title);
        setDescription(post.description);
        setLinkText(post.link);
        setContent(post.markdownContent.trimStart()); //trimStart verhindert hier, dass dem eigentlichen Inhalt Leerraum vorausgeht
        setError(false);
      };
      console.log("Values are set");
      console.log(
        post.title,
        post.description,
        post.linkText,
        post.content,
        post.error
      );
    }
  });*/

  const router = useRouter();

  async function handleSubmit() {
    if (isUpdate) {
      await axios.put(`/api/update/${post.title}`, {
        title,
        description,
        linkText,
        content,
      });
      router.push(`/posts/${title}`);
    } else {
      await axios.post("/api/create", {
        title,
        description,
        linkText,
        content,
      });
      router.push("/");
    }
  }

  function validateValues() {
    if (
      title === "" ||
      description === "" ||
      linkText === "" ||
      content === ""
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }

  /* ODER:
  function validateValues() {
    if (title && description && linkText && content) {
      setError(false);
    } else {
      setError(true);
    }
  }*/

  return (
    <Grid container spacing={3} sx={{ my: { xs: 4, md: 4 } }}>
      <form
        onChange={validateValues}
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
            disabled={error}
          >
            Erstellen
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default ToggleForm;
