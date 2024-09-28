import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from './App';
import Navbar from '../src/components/Navbar.jsx';
import Firstdiv from '../src/components/Firstdiv.jsx';
import EmptySpace from '../src/components/EmptySpace.jsx'
import Finaldiv from '../src/components/Finaldiv.jsx';
import FirstFooter from '../src/components/FirstFooter.jsx';
import data from './components/data.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Firstdiv />
    
    <div id="parent">
      {data.map(x=>{
        return(
          <App img={x.img} alt={x.alt} h1={x.h1} p={x.p} button={x.button} a={x.a}/>
        )
        
      })}
    </div>
    <EmptySpace/>
    <Finaldiv/>
    <FirstFooter/>
  </React.StrictMode>
);

