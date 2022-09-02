import * as React from "react";
import { ButtonGroup, Button, Link } from "@mui/material";

import { useRouter } from "next/router";
import Createbutton from "./createButton";
import DeleteDialog from "./dialog";

function Buttongroup(props) {
  const { id } = props;

  const router = useRouter();

  function bringToUpdate() {
    router.push(`/posts/updatePost/${id}`);
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Createbutton></Createbutton>
      <Button variant="contained" color="secondary" onClick={bringToUpdate}>
        UPDATE
      </Button>
      <DeleteDialog id={id}></DeleteDialog>
    </ButtonGroup>
  );
}

export default Buttongroup;
