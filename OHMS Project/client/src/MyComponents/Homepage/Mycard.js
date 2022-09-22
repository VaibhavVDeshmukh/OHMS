import React from 'react'
import card1 from './../Images/homepage.jpg';

const Mycard = props => {
  return (
    <div>


<div className="card" >
  <img className="card-img-top" src={props.cimage} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.ctitle}</h5>
    <p className="card-text">{props.cdescription}</p>
    
  </div>
</div>

 

    </div>
    
  )
}



export default Mycard;