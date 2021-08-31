import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.love = '💓';
    this.state = { timesClicked: 0 };
  }

  Click = (event) => {
    event.preventDefault()
    this.setState({ timesClicked: this.state.timesClicked + 1 });
    this.props.handleDisplay();
    this.props.filterBeast(this.props.image_url);
    console.log(this.props.image_url)
  }
  render() {
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={this.props.image_url} onClick={this.Click} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>

                    {this.props.description} {this.state.timesClicked} {this.love}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default HornedBeasts;