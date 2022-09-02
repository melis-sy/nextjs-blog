import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { lightBlue } from "@mui/material/colors";
import axios from "axios";

export default function DeleteDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function deletePost() {
    await axios.delete(`/api/delete/${id}`);
    router.push("/");
  }

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        DELETE
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Post löschen?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Möchtest du diesen Post wirklich löschen?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="error" onClick={handleClose}>
            Nein
          </Button>
          <Button onClick={(handleClose, deletePost)} autoFocus>
            Ja
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
