import React from "react";

class HornedBeasts extends React.Component{
    render(){
        return( 
        <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <img src={this.props.image_url} alt="" width="500" height="400"></img>
        </div>)
    };
}

export default HornedBeasts;