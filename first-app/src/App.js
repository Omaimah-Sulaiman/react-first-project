import React from "react";
import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import SelectedBeast from "./components/SelectedBeast";
import Data from "./data/data.json";

class App extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        Data,
        show: false,
        title: null,
        url: null,
        description: null,
    
      };
    }

    selectNumberOfHorns=()=>{
     const selectHorns= Data.map((value) =>{
        if(Data.horns==='1'){
          return value;
        }
      })
    }
  
    modalInfo = (title,description, url) => {
      this.setState({
        title: title,
        url: url,
        description: description,
       
      });
    };
  
    updateShow= () =>  {
      this.setState({
          show : !this.state.show
      });
    }
    
  
  render(){
    
    return (
      <div >
     
        <Header/>
        <Main
        data={this.state.Data}
        updateShow={this.updateShow}
        modalInfo={this.modalInfo}
   
        />
        <SelectedBeast
          show={this.state.show}
          title={this.state.title}
          url={this.state.url}
          descriptiones={this.state.description}
          updateShow={this.updateShow}
          modalInfo={this.modalInfo}

          
        />
        <Footer/>
      </div>
    );
  }
}
  

export default App;
