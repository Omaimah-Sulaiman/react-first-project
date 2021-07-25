import React from "react";
import Main from "./components/main"
import Footer from "./components/footer"
import Header from "./components/header"

class App extends React.Component{

  render(){
    
    return (
      <div >
     
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
  

export default App;
