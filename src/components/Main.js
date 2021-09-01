import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from "./SelectedBeast";
import Row from 'react-bootstrap/Row';
import DataForm from './DataForm'

class Main extends React.Component {


    render() {
        return (
            <main>
                <DataForm
                    

                />
                <Row xs={1} md={4} className="g-4">
                    {
                        this.props.Data.map(element => {
                            return (
                                <div>
                                    <HornedBeasts
                                        image_url={element.image_url}
                                        title={element.title}
                                        description={element.description}

                                        handleDisplay={this.props.handleDisplay}
                                        show={this.props.show}

                                        filterBeast={this.props.filterBeast}

                                    />
                                </div>
                            )
                        })

                    }
                </Row>

                <SelectedBeast
                    handleDisplay={this.props.handleDisplay}
                    show={this.props.show}

                    ChoosenBeast={this.props.ChoosenBeast}


                />
            </main>
        )
    }
}

export default Main;



