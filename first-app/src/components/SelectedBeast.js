import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={data.image_url}
    // }
 showModel=()=>{
  
 }
    render(){
        return( 
        <div>
            <Button >
                Launch demo modal
            </Button>

            <Modal >
                <Modal.Header closeButton>
                <Modal.Img  src={this.props.image_url} alt="" />
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> {this.props.description}</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
          
        </div>)
    };
}

export default SelectedBeast;