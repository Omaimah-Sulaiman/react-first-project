import React from "react";
import HornedBeasts from "./HornedBeasts";
import Data from "../data/data.json";


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
            {listItems}
        </div>)
};
};

export default Main;