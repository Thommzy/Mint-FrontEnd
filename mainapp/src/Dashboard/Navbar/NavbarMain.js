import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";
import "./Navbar.css";
import RightMenu from "./RightMenu";

class NavbarMain extends Component {
  render() {
    return (
      <div className="NavBarMain">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={2}>
            <div className="NavbarLogo">TransMonitor</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={1}></Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <div className="searchBar">
              <Icon disabled name="search" />
              <p>Search...</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <RightMenu />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default NavbarMain;
