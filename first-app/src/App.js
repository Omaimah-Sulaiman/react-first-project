import React from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./data/data.json";
import SelectedBeast from './components/SelectedBeast';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: Data,
      showModel: false,
      selectedBeast: {},
    };
  }

  displayModal = (select) => {
    this.setState({
      showModel: true,
      selectedBeast: select,
    });
  };
  closeModal = () => {
    this.setState({
      showModel: false,
    });
  };

  render() {
    return (
      <Container fluid align='center'>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Main
            Data={Data}
            displayModal={this.displayModal}
            closeModal={this.closeModal}
          />
          <SelectedBeast
            selectedBeast={this.state.selectedBeast}
            show={this.state.showModel}
            close={this.closeModal}
          />
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
