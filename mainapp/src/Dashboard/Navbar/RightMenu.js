import React, { Component } from "react";
import { List, Image, Icon } from "semantic-ui-react";
import dummy from "../../images/download.jpeg";

class RightMenu extends Component {
  render() {
    return (
      <div>
        <List horizontal floated="right">
          <List.Item>
            <List.Header>
              <div className="navbarSupport">Support</div>
            </List.Header>
          </List.Item>
          <List.Item>
            <List.Header>
              <div className="navbarFaq">FAQ</div>
            </List.Header>
          </List.Item>
          <List.Item>
            <List.Content>
              <div className="txt">8</div>
              <div className="notification">
                <Icon name="bell outline" />
              </div>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="h6">Hello</List.Header>
              <List.Header>Oluwalek Ojo</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={dummy} />
          </List.Item>
        </List>
      </div>
    );
  }
}

export default RightMenu;
