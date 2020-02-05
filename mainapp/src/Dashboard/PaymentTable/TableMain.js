import React, { Component } from "react";
import { Table, Header } from "semantic-ui-react";

class TableMain extends Component {
  render() {
    return (
      <div className="TableReal">
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Type</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Transaction No</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Requires call</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Denied</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TableMain;
