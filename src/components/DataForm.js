import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'


class DataForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            horns: []
        }
    }
    
    groupByHorns = (horn) => {

        let Filtered = this.props.Data.filter(element => {
            return (element.horns===horn)
        })

        return (Filtered)
    }
    onChangeHorn = (event) => {
        this.setState({ horns: event.target.value })
        
        console.log('Form have been Changed!')

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.groupByHorns(event.target.value)
        console.log(this.state.horns);
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  type="text" placeholder="Group By Number of Horns" />
                        <Form.Select onChange={this.onChangeHorn} aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">Hunderd</option>
                        </Form.Select>
                    </Form.Group>
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <hr />
            </div>
        )
    }
}
export default DataForm;
