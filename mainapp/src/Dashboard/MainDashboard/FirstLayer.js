import React, { Component } from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import see from "../../images/graph.jpg";

class FirstLayer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="firstCard">
              <Card>
                <Card.Content>
                  <Image floated="right" size="mini" src={see} />
                  <Card.Meta>Daily Transaction Volume</Card.Meta>
                  <Card.Description>
                    <strong>&#8358;2,342</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="secondCard">
              <Card>
                <Card.Content>
                  <Image floated="right" size="mini" src={see} />
                  <Card.Meta>Daily Transaction Value</Card.Meta>
                  <Card.Description>
                    <strong>&#8358;4,000,000</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="thirdCard">
              <Card>
                <Card.Content>
                  <Image floated="right" size="mini" src={see} />
                  <Card.Meta>Total Transaction Volume</Card.Meta>
                  <Card.Description>
                    <strong>&#8358;452,000</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="fourthCard">
              <Card>
                <Card.Content>
                  <Image floated="right" size="mini" src={see} />
                  <Card.Meta>Total Transaction Value</Card.Meta>
                  <Card.Description>
                    <strong>&#8358;4,000,000</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default FirstLayer;
