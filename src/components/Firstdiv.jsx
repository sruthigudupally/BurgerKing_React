import React from "react";
export default class Firstdiv extends React.Component{
    render(){
        return(
            <>
            <div id="firstdiv">
               <div id="child1">
               <h1 id="h1">Start your BK® order.</h1>
               <button class="but2" id="button1"><i class="fa-solid fa-bag-shopping"></i>Order Pickup</button>
               <br />
               <button class="but2" id="button2"><i class="fa-solid fa-truck"></i>Order Delivery</button>
                </div>
                <div id="child2">
                        <img alt="Start your BK® order." draggable="false" src="assets/firstcard.GIF" id="img1"/>
                </div>
            </div>
            </>
        )
    } 
}