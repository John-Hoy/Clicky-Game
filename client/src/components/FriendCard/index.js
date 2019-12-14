import React from "react";

function FriendCard(props) {
  return (
    <div className="item-cards">
      <div className="img-container">
        <img alt={props.name} src={props.image} data-id={props.id} onClick={() => props.removeCard(props.id)}/>
      </div>
    </div>
  );
}
export default FriendCard;