import React, { Component } from 'react';
import './App.css'



class Header extends Component {
  render () {
    return(
      <div className="header">
        <h1>This is a Header</h1>
      </div>
    )
  }
}

class Heading extends Component {
  render () {
    return(
      <div className="footerS">
        <h1>This is a Heading tag </h1>
      </div>
    )
  }
}



class App extends Component {
render () {

//   let soomro = [
//   {text : "ibrar"},  
//   { text : "khan"},
//   { text : "sahab"},
  
// ]
  return  (
    <div className="main-component">
      <Header />     
      <h1>This is a down header tag</h1>

      <Heading />
       {/* <ul>
         {soomro.map((choopo, ind)=> {
           return (
           <li key={ind}>{choopo.text}</li>
           )
         })}
         </ul>    */}

    </div>
  ) 
}

}




export default App;
