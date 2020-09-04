import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black
  },
  tooltip: {
    backgroundColor: theme.palette.common.black
  }
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} placement="top" />;
}

export default function CustomTooltip() {
  return (
    <div style={{ marginTop: 55 }}>
      <BootstrapTooltip title="Tooltip">
        <Button>Custom Tooltip with arrow</Button>
      </BootstrapTooltip>
    </div>
  );
}
