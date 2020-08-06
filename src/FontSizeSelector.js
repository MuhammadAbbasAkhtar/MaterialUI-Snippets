import React from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  },
  input: {
    width: 42
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 50,
    maxWidth: 70
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 60
    }
  }
};

const fontSizes = [
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "32",
  "42",
  "56",
  "64",
  "72",
  "96",
  "120",
  "172",
  "200",
  "240"
];

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -3,
    marginLeft: -12,

    "&:focus, &:hover, &$active": {
      boxShadow:
        "inset 0 3px 0px 46px rgba(0,0,0,0.1), inset 0 4px 44px 60px #52af77, inset 0 14px 36px 59px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {}
    }
  },

  active: {},
  valueLabel: {},
  track: {
    height: 7,
    borderRadius: 4
  },
  rail: {
    height: 6,
    borderRadius: 4
  }
})(Slider);

export default function FontSizeSelector() {
  const classes = useStyles();
  const [value, setValue] = React.useState(8);
  const theme = useTheme();
  const [fontSize, setFontSize] = React.useState(8);

  const handleChange = (event) => {
    setFontSize(event.target.value);
    setValue(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setFontSize(getClosest(fontSizes, newValue));
  };

  const getClosest = (array, num) => {
    var i = 0;
    var minDiff = 1000;
    var ans;
    for (i in array) {
      var m = Math.abs(num - array[i]);
      if (m < minDiff) {
        minDiff = m;
        ans = array[i];
      }
    }
    return ans;
  };
  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <PrettoSlider
            valueLabelDisplay="off"
            aria-label="pretto slider"
            value={value}
            onChange={handleSliderChange}
            min={6}
            max={240}
          />
        </Grid>
        <Grid item>
          {/* <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          /> */}
          <FormControl className={classes.formControl}>
            <Select
              id="fontSize-selector"
              value={fontSize}
              onChange={handleChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {fontSizes.map((fontSize) => (
                <MenuItem
                  key={fontSize}
                  value={fontSize}
                  style={{ fontWeight: theme.typography.fontWeightRegular }}
                >
                  {fontSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
