import React from 'react';
import Card from 'react-bootstrap/Card'


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
  }


  
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src={this.props.image_url} onClick={this.Click} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} {this.state.timesClicked} {this.love}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeasts;