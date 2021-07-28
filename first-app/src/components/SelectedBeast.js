import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
   
 
    render(){
        return( 
        <div>
           

            <Modal src={this.props.url} onClick={this.props.updateShow}>
            <Modal.Img  variant="top" src={this.props.url} onClick={this.props.updateShow}/>
            <Modal.Title>{this.props.title}</Modal.Title>
            <Modal.Body> {this.props.description}</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
          
        </div>)
    };
}

export default SelectedBeast;