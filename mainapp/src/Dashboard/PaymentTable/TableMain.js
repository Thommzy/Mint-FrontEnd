import React, { Component } from "react";
import { Table, Header, Button } from "semantic-ui-react";

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
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="reconciledButton">
                  <Button color="white">
                    <p>.</p> Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="pendingButton">
                  <Button color="white">
                    <p>.</p> Pending
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="reconciledButton">
                  <Button color="white">
                    <p>.</p> Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="reconciledButton">
                  <Button color="white">
                    <p>.</p> Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="pendingButton">
                  <Button color="white">
                    <p>.</p> Pending
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="unReconciledButton">
                  <Button color="white">
                    <p>.</p> Un-Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="reconciledButton">
                  <Button color="white">
                    <p>.</p> Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="unReconciledButton">
                  <Button color="white">
                    <p>.</p> Un-Reconciled
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <div className="paymentPic">
                <Table.Cell>
                  <p>VW</p>
                </Table.Cell>
                <Header as="h4">Apple Mac Book 15' 250 SSD 12GB</Header>
              </div>
              <Table.Cell>$73430</Table.Cell>
              <Table.Cell>1234567890</Table.Cell>
              <Table.Cell>12:30</Table.Cell>
              <Table.Cell>
                <div className="pendingButton">
                  <Button color="white">
                    <p>.</p> Pending
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TableMain;
