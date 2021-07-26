import React from "react";
import Data from "../data/data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'



class HornedBeasts extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            voite:0
        }
    }
        whenClickImg =() =>{
            this.setState({
                voite:this.state.voite +1
            })
        }
    
    
        render(){
        // let listItems=[];
        const listItems = Data.map((item) =>{
            console.log(item.title);
                
           return  <div CardColumns>
              
              <Row xs={1} md={2} className="g-4">
               <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.whenClickImg} src={item.image_url} alt="" width="500" height="400" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <p>the voites : {this.state.voite}</p>
                </Card.Body>
                </Card>
                </Row>
              
                {/* <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img onClick={this.whenClickImg} src={item.image_url} alt="" width="500" height="400"></img>
                <p>the voites : {this.state.voite}</p> */}
             </div>
        });
        return( 
        <div>
            { listItems }
        </div>)
    };
}

export default HornedBeasts;