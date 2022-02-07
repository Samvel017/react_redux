import React from "react";
import { connect } from "react-redux";

function Main({ card, deleteCard }) {
  
  return (
    <div className="main">
      <div className="container">
        {card.map((el, index) => {
          return (
            <div className="card" key={index}>
              <span>{el.id}</span>
              <button
                className="close-btn"
                onClick={() => {
                  deleteCard(el.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default connect(
  (state) => ({
    card: state,
  }),
  (dispatch) => ({
    deleteCard: (id) => {
      dispatch({ type: "DELETE_CARD", id: id });
    },
  })
)(Main);
