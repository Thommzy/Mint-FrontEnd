import React, { Component } from "react";
import { Header, Dropdown, Grid, Input, Icon } from "semantic-ui-react";
import ClearableInput from "./ClearableInput";

class PaymentTable extends Component {
  render() {
    return (
      <>
        <div className="payMain">
          <div>
            <Header as="h2">Payments</Header>
          </div>
          <div>
            <Grid>
              <Grid.Column mobile={16} tablet={8} computer={2}>
                Showing
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={2}>
                <Dropdown text="20">
                  <Dropdown.Menu>
                    <Dropdown.Item text="New" />
                    <Dropdown.Item text="Open..." description="ctrl + o" />
                    <Dropdown.Item text="Save as..." description="ctrl + s" />
                    <Dropdown.Item text="Rename" description="ctrl + r" />
                    <Dropdown.Item text="Make a copy" />
                    <Dropdown.Item icon="folder" text="Move to folder" />
                    <Dropdown.Item icon="trash" text="Move to trash" />
                    <Dropdown.Divider />
                    <Dropdown.Item text="Download As..." />
                    <Dropdown.Item text="Publish To Web" />
                    <Dropdown.Item text="E-mail Collaborators" />
                  </Dropdown.Menu>
                </Dropdown>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={3}>
                Out of 500 Payments
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={5}>
                <div className="paymentSearch">
                  <Icon name="search" /> Search Payments.....
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={3}>
                <ClearableInput />
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentTable;
