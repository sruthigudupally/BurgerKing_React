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
                <div className="card1 card3" id="card1_id" key="card1">
                     <img alt={this.props.alt}  src={this.props.img} className="card_img"/>
                     <div  className="para">
                      <h2>{this.props.h1}</h2>
                      <p>{this.props.p}</p>
                      <a href="fgh">{this.props.a}</a> <br /><br />
                      <button className="button_card">{this.props.button}</button>
                     </div>
                </div>
         
        </div>
        </>
    )
  }
}
       