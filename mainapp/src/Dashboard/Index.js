import React, { Component } from "react";
import NavbarMain from "./Navbar/NavbarMain";
import { Container } from "semantic-ui-react";
import MainDashboard from "./MainDashboard/MainDashboard";
import "./dashboard.css";

class Index extends Component {
  render() {
    return (
      <div className="mainIndex">
        <Container fluid>
          <NavbarMain />
          <MainDashboard />
        </Container>
      </div>
    );
  }
}

export default Index;
