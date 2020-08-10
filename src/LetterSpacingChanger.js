import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PrettoSlider from "./PrettoSlider";
let displayValue = 0;

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

export default function LetterSpacingChanger() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 0]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    const elem = e.currentTarget;
    const spans = elem.querySelectorAll("[aria-label='letter-spacing']");

    if (newValue[0] < 0) {
      spans[0].style.display = "block";
      displayValue = newValue[0];
    } else {
      spans[0].style.display = "none";
    }

    if (newValue[1] >= 1) {
      spans[1].style.display = "block";
      displayValue = newValue[1];
    } else {
      spans[1].style.display = "none";
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="letter-spacing" gutterBottom>
        {displayValue}
      </Typography>

      {/* <Slider
        min={-21}
        max={21}
        value={value}
        onChange={handleChange}
        aria-label="letter-spacing"
      /> */}
      <PrettoSlider
        valueLabelDisplay="off"
        aria-label="letter-spacing"
        value={value}
        onChange={handleChange}
        min={-20}
        max={20}
        // className={classes.CustomSlider}
      />
    </div>
  );
}
