import * as React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function RecreateButton({ toRecreate }) {
  const router = useRouter();

  function bringToPlace() {
    if (toRecreate) {
      router.push(`/posts/deleted-posts`);
    } else {
      router.push(`/`);
    }
  }

  const text = toRecreate ? "Zu den gelöschten Posts" : "Zurück zur Startseite";

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={bringToPlace}
      sx={{ my: 3 }}
    >
      {text}
    </Button>
  );
}
