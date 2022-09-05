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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Createbutton></Createbutton>

      <Button variant="contained" color="secondary" onClick={bringToUpdate}>
        UPDATE
      </Button>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        DELETE
      </Button>
      <DeleteDialog
        id={id}
        open={open}
        handleClose={handleClose}
      ></DeleteDialog>
    </ButtonGroup>
  );
}

export default Buttongroup;
