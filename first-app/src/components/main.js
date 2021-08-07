import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horned: this.props.Data,
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value !== 'all') {
      const compareHornes = this.props.Data.filter(
        (item) => item.horns === parseInt(e.target.value)
      );
      this.setState({
        horned: compareHornes,
      });
      console.log(compareHornes);
    } else {
      this.setState({
        horned: this.props.Data,
      });
    }

  };

  render() {
    return (
      <div>
        <Container className='p-3'>
          <FloatingLabel
            controlId='floatingSelect'
            label='Select the Number of Horns'
          >
            <Form.Control
              as='select'
              defaultValue='all'
              onChange={(e) => this.handleChange(e)}
            >
              <option value='all'> All</option>
              <option value='1'> One</option>
              <option value='2'> Two</option>
              <option value='3'> Three</option>
              <option value='100'> One Hunderd</option>
            </Form.Control>
          </FloatingLabel>
        </Container>

        <Container>
          <Row xs={1} md={3} className='g-4'>
            {this.state.horned.map((value, i) => {
              return (
                <Col key={i}>
                  <HornedBeasts
                    title={value.title}
                    image_url={value.image_url}
                    keyword={value.keyword}
                    description={value.description}
                    horns={value.horns}
                    displayModal={this.props.displayModal}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;