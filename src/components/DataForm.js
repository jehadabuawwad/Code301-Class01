import React from 'react'
import Form from 'react-bootstrap/Form'



class DataForm extends React.Component {

    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Group By Number of Horns" />
                        <Form.Select onChange={this.props.filterBeasts} aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">Hunderd</option>
                            <option value="0">All</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <hr />
            </div>
        )
    }
}
export default DataForm;
