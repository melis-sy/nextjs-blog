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
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="contained" color="success">
        CREATE
      </Button>
      <Button variant="contained" color="secondary">
        UPDATE
      </Button>
      <Button variant="contained" color="error" onClick={deletePost}>
        DELETE
      </Button>
    </ButtonGroup>
  );
}

export default Buttongroup;
