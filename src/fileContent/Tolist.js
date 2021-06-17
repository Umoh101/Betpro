import React from "react";
import Button from "@bit/mui-org.material-ui.button";
import Tooltip from "@bit/mui-org.material-ui.tooltip";

export default function Tolist() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}
