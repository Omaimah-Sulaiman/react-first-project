import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component{
   
 
    render(){
        return( 
        <div>
           

            <Modal  show={this.props.show} onClick={this.props.updateShow}>
            <Modal.Img  variant="top" src={this.props.url} onClick={this.props.updateShow}/>
            <Modal.Title>{this.props.title}</Modal.Title>
            <Modal.Body> {this.props.description}</Modal.Body>
            <Button variant="danger" onClick={this.props.updateShow} > close</Button>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
          
        </div>)
    };
}

export default SelectedBeast;