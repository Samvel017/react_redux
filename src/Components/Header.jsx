import React, { useContext } from "react";
import { connect } from "react-redux";
import { Context } from "../Context";

function Header({createCardHandler,sortCards}) {
    const createCard = () =>{
      let num = Math.ceil(Math.random()*100000)
      createCardHandler(num)
    }
  return (
    <div className="header">
      <nav>
        <button onClick={createCard}>ADD CARD</button>
        <button onClick={sortCards}>SORT CARD</button>
      </nav>
    </div>
  );
}

export default connect(null,(dispatch)=>({
  createCardHandler: (id)=>{
    dispatch({type:"ADD_CARD", id:id})
  },
  sortCards: () =>{
    dispatch({type:"SORT_CARD"})
  }
}))(Header)