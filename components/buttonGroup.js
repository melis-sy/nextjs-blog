import * as React from "react";
import { ButtonGroup, Button, Link } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

function Buttongroup(props) {
  const { id } = props;

  const router = useRouter();

  async function deletePost() {
    await axios.delete(`/api/delete/${id}`);
    router.push("/");
  }

  function bringToCreate() {
    router.push("/posts/createNewPost");
  }

  function bringToUpdate() {
    router.push(`/posts/updatePost/${id}`);
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="contained" color="success" onClick={bringToCreate}>
        CREATE
      </Button>
      <Button variant="contained" color="secondary" onClick={bringToUpdate}>
        UPDATE
      </Button>
      <Button variant="contained" color="error" onClick={deletePost}>
        DELETE
      </Button>
    </ButtonGroup>
  );
}

export default Buttongroup;
