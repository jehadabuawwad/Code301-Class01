import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        {
          <Modal show={this.props.show} onHide={this.props.handleModalDisplay}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
            </Modal.Header>

            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <Image src={this.props.SelectedBeast.image_url} rounded />
                </Col>
              </Row>
            </Container>
            <Modal.Body>{this.props.SelectedBeast.description}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={this.props.handleModalDisplay}
              >
                Close
              </Button>
              <Button variant="primary" onClick={this.props.handleModalDisplay}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </div>
    );
  }
}

export default SelectedBeast;
