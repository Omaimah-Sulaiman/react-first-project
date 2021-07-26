import React from "react";
import Data from "../data/data.json"

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
                
           return  <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img onClick={this.whenClickImg} src={item.image_url} alt="" width="500" height="400"></img>
                <p>the voites: {this.state.voite}</p>
             </div>
        });
        return( 
        <div>
            { listItems }
        </div>)
    };
}

export default HornedBeasts;