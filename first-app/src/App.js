import React from "react";
import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import SelectedBeast from "./components/SelectedBeast";
import Data from "./data/data.json";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Data,
      voite:0}
  }
  whenClickImg =() =>{
    this.setState({
      voite:this.state.voite +1


    });
  }

  render(){
    
    return (
      <div >
     
        <Header/>
        <Main
        data={this.state.Data}
        whenClick={this.whenClickImg}
        voite={this.state.voite}
        />
        <SelectedBeast 
        data={this.state.Data}
        />
        <Footer/>
      </div>
    );
  }
}
  

export default App;
