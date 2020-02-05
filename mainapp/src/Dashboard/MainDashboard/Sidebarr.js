import React, { Component } from "react";
import { Card, Button, Header, Icon, Image } from "semantic-ui-react";

class Sidebarr extends Component {
  render() {
    return (
      <div className="sideBarCard">
        <Card>
          <Card.Content>
            <Button color="green">GENERATE INVOICE</Button>
            <div className="mainSection">
              <Header as="h4">Main</Header>
            </div>
            <div className="overViewSection">
              <Header as="h4">
                <Icon name="compass outline" /> Overview
              </Header>
            </div>
            <div className="paymentSection">
              <Header as="h4">Payments</Header>
            </div>
            <div className="allPaymentsSection">
              <Header as="h4">
                <Icon name="credit card" /> All Payments
              </Header>
            </div>
            <div className="reconciledPaymentSection">
              <Header as="h4">
                <Icon name="stop" /> Reconcilled Payments
              </Header>
            </div>
            <div className="unReconciledPaymentSection">
              <Header as="h4">
                <Icon name="cancel" /> Un- Reconcilled Payment
              </Header>
            </div>
            <div className="manualSettlementSection">
              <Header as="h4">
                <Icon name="bullseye" /> Manual Settlement
              </Header>
            </div>
            <div className="ordersSection">
              <Header as="h4">Orders</Header>
            </div>
            <div className="allOrdersSection">
              <Header as="h4">
                <Icon name="book" /> All Orders
              </Header>
            </div>
            <div className="pendingOrdersSection">
              <Header as="h4">
                <Icon name="pause" /> Pending Orders
              </Header>
            </div>
            <div className="reconciledOrdersSection">
              <Header as="h4">
                <Icon name="checkmark" /> Reconciled Orders
              </Header>
            </div>
            <div className="merchantProfileSection">
              <Header as="h4">
                <Icon name="street view" /> Merchant Profile
              </Header>
            </div>{" "}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Sidebarr;
