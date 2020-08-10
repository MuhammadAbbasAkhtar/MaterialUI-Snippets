import React from "react";
import { withStyles } from "@material-ui/core/";
import Slider from "@material-ui/core/Slider";

export default PrettoSlider = withStyles({
  root: {
    color: "#4f6bd7",
    height: 0,
    left: 10,
    padding: 0,
    top: -5
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: "#ffffff",
    border: "2px solid currentColor",
    marginTop: -5,
    marginLeft: -12,

    "&:focus, &:hover, &$active": {
      boxShadow:
        "inset 0 3px 0px 46px rgba(0,0,0,0.1), inset 0 4px 44px 60px #4f6bd7, inset 0 14px 36px 59px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {}
    }
  },

  active: {},
  valueLabel: {},
  track: {
    height: 3,
    borderRadius: 4
  },
  rail: {
    height: 3,
    borderRadius: 4
  }
})(Slider);
