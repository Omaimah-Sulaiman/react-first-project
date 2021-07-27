import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class HornedBeasts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      voite:0
    };
  }
        whenClickImg =() =>{
          this.setState({
            voite:this.state.voite +1

          });
        }
    
    
        render(){
        
          return ( <div>
            <Col>
            
            <Card style={{ width: '18rem' }}>
              <Card.Img onClick={this.whenClickImg} src={this.props.image_url} alt="" />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <p>the voites : {this.state.voite}</p>
              </Card.Body>
            </Card>
            </Col>            
            <br></br>
          </div>);
        
        }

}
export default HornedBeasts;