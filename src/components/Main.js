import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from "./SelectedBeast";
import Row from 'react-bootstrap/Row';
import DataForm from './DataForm'

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = ({
            Data: this.props.Data
        });
    }

    filterBeasts = (event) => {
        event.preventDefault();
        let SelectBaseOnHorns = parseInt(event.target.value);
        let AllData = this.props.Data;

        let FilteredData = AllData.filter(element => {
            return (element.horns === SelectBaseOnHorns);
        })
        if (FilteredData.length > 0) {
            this.setState({
                Data: FilteredData,
            })

        }
        else if (FilteredData.length === 0) {
            this.setState({
                Data: this.props.Data,
            })
        }
    }

    render() {
        return (
            <main>
                <DataForm
                    filterBeasts={this.filterBeasts}
                />
                <Row xs={1} md={4} className="g-4">
                    {
                        this.state.Data.map(element => {
                            return (
                                <div>
                                    <HornedBeasts
                                        image_url={element.image_url}
                                        title={element.title}
                                        description={element.description}

                                        handleModalDisplay={this.props.handleModalDisplay}
                                        selectBeast={this.props.selectBeast}
                                    />
                                </div>
                            )
                        })

                    }
                </Row>

                <SelectedBeast
                    handleModalDisplay={this.props.handleModalDisplay}
                    show={this.props.show}

                    selectBeast={this.props.selectBeast}
                    SelectedBeast={this.props.SelectedBeast}
                />
            </main>
        )
    }
}

export default Main;



