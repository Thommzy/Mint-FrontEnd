import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Sidebarr from "./Sidebarr";
import "./MainDashboard.css";
import FirstLayer from "./FirstLayer";

class MainDashboard extends Component {
  render() {
    return (
      <div className="sidebarrMain">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Sidebarr />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={10}>
            <div className="secondLowerPart">
              <FirstLayer />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MainDashboard;
