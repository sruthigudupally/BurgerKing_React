import React from 'react';
// import Navbar from '../src/components/Navbar.jsx';
// import Firstdiv from '../src/components/Firstdiv.jsx';
// import Seconddiv from '../src/components/Seconddiv.jsx';
// import Spacediv from '../src/components/Spacediv.jsx';
// import Finaldiv from '../src/components/Finaldiv.jsx';
export default class App extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    
  }
  render(){
    return(
      
        <>
        <div id="seconddiv">
                <div class="card1 card3" id="card1_id">
                     <img alt={this.props.alt}  src={this.props.img} class="card_img"/>
                     <div  class="para">
                      <h2>{this.props.h1}</h2>
                      <p>{this.props.p}</p>
                      <a href="fgh">{this.props.a}</a> <br /><br />
                      <button class="button_card">{this.props.button}</button>
                     </div>
                </div>
         
        </div>
        </>
    )
  }
}
       