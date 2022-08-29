import * as React from "react";
import { ButtonGroup, Button, Link } from "@mui/material";
import { deletePost } from "../lib/delete";

function Buttongroup(props) {
  const { id } = props;
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="contained" color="success">
        CREATE
      </Button>
      <Button variant="contained" color="secondary">
        UPDATE
      </Button>
      <Button variant="contained" color="error" onClick={deletePost(id)}/>
        DELETE
      </Button>
    </ButtonGroup>
  );
}

export default Buttongroup;
