import React, { Component } from "react";
import { Grid, Button, Segment, Header, Progress } from "semantic-ui-react";

export default class BarGraph extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div class="GraphTitle">
              <div>
                <Grid>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
                    <div className="dateText">Today : 5, Aug 2018</div>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
                    <div className="graphDate">
                      <Button> 1 Jan -1 Jun</Button>
                    </div>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    Pagination
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Grid.Column>
              <div className="topCard">
                <Segment>
                  <div className="orderTitle">
                    <Header>Orders</Header>
                  </div>
                  <div className="progressBar">
                    <Progress percent={80} size="tiny" color="green"></Progress>
                  </div>
                  <div className="pendStatus">
                    <Header>Pending Orders: 20</Header>
                  </div>
                  <div className="reconStatus">
                    <Header>Reconciled Orders: 80</Header>
                  </div>
                  <div className="totalStatus">
                    <Header>Total Orders: 100</Header>
                  </div>
                </Segment>
              </div>
              <div className="lowerCard">
                <Segment>
                  <div className="orderTitle">
                    <Header>Payments</Header>
                  </div>
                  <div className="progressBar">
                    <Progress percent={80} size="tiny" color="green"></Progress>
                  </div>
                  <div className="pendStatus">
                    <Header>Unreconciled payment: 20</Header>
                  </div>
                  <div className="reconStatus">
                    <Header>Reconciled Payment: 80</Header>
                  </div>
                  <div className="totalStatus">
                    <Header>Total Payment: 100</Header>
                  </div>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
