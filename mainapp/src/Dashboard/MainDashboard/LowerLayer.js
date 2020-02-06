import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import LowerPagination from "./LowerPagination";

class LowerLayer extends Component {
  render() {
    return (
      <div className="lowerlayer">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div className="textLow">Showing 1 to 100 of 500 Entries</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div>
              <List horizontal floated="right">
                <List.Item>
                  <List.Header>
                    <div className="">
                      <LowerPagination />
                    </div>
                  </List.Header>
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LowerLayer;
