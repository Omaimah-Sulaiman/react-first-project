import React from "react";
import HornedBeasts from "./HornedBeasts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "../data/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{
   
    render(){
        const listItems = Data.map((item) =>{
                
            return (
                <HornedBeasts
            
             title={item.title}
             description={item.description}
             image_url={item.image_url}
            
            
                />
            );
             
        });
        return( 
        <div>
             <Container>
             <Row xs={2} md={4} lg={3}>
               {listItems}
            </Row>
            </Container>
        </div>)
};
};

export default Main;