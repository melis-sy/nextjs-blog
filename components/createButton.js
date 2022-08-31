import * as React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function Createbutton(props) {
  const { id } = props;

  const router = useRouter();

  function bringToCreate() {
    router.push("/posts/createNewPost");
  }

  return (
    <Button variant="contained" color="success" onClick={bringToCreate}>
      CREATE
    </Button>
  );
}

export default Createbutton;
