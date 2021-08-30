import React from 'react';
import Data from '../assest/data.json'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.love = '💓';
    this.state = {timesClicked: 0};
    this.increaseTimesClick = this.increaseTimesClick.bind(this);
  }

  increaseTimesClick = (event) => {
    this.setState({timesClicked: this.state.timesClicked+1});
    // this.setState({
    //   timesClicked: this.state.timesClicked + 1
    // });
    
  }
  render() {
    return (
      <div>
        {
          Data.map(item => {
            return (
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={item.image_url} onClick={this.increaseTimesClick} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>

                          {item.description} {this.state.timesClicked} {this.love.repeat(this.state.counter)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )
          }
          )};
      </div>
    )
  }
}

export default HornedBeasts;