import React, { Component } from "react";
import NavbarMain from "./Navbar/NavbarMain";
import { Container } from "semantic-ui-react";

class Index extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavbarMain />
        </Container>
      </div>
    );
  }
}

export default Index;
