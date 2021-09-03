import "./App.css";
import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./assest/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
      show: false,
      SelectedBeast: {},
      FilteredBeasts: {},
    };
  }

  handleModalDisplay = () => {
    this.setState({ show: !this.state.show });
  };

  selectBeast = (src) => {
    let ourTarget;
    Data.forEach((element) => {
      if (element.image_url === src) {
        ourTarget = element;
      }
    });

    this.setState({ SelectedBeast: ourTarget });
  };

  render() {
    return (
      <div>
        <Header />
        <Main
          Data={this.state.Data}
          selectBeast={this.selectBeast}
          SelectedBeast={this.state.SelectedBeast}
          handleModalDisplay={this.handleModalDisplay}
          show={this.state.show}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
