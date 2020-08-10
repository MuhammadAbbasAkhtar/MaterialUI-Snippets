import React, { Component } from "react";
import FontSizeSelector from "./FontSizeSelector";
import LetterSpacingChanger from "./LetterSpacingChanger";
import Grid from "@material-ui/core/Grid";
export default class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FontSizeSelector />
          </Grid>
          <Grid item xs={12}>
            <LetterSpacingChanger />
          </Grid>
        </Grid>
      </div>
    );
  }
}
