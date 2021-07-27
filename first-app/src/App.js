import React from "react";
import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import Data from "./data/data.json";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={Data}
  }

  render(){
    
    return (
      <div >
     
        <Header/>
        <Main
        data={this.state.Data}
        />
        <Footer/>
      </div>
    );
  }
}
  

export default App;
