import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Sidebarr from "./Sidebarr";
import "./MainDashboard.css";
import FirstLayer from "./FirstLayer";
import PaymentTable from "../PaymentTable/PaymentTable";
import TableMain from "../PaymentTable/TableMain";
import LowerLayer from "./LowerLayer";
import BarGraph from "./BarGraph";

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
              <BarGraph />
              <PaymentTable />
              <TableMain />
              <LowerLayer />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MainDashboard;
