import React from "react";
import "./style.scss";

export default function Item({image ="", children}) {
  return (
  <div className="feature-item">
    <div className="feature-icon">
      <img src={image} alt="icon" />
    </div>
    <h3 className="feature-item-title"></h3>
    <p>{children}</p>
    </div>
  )
}
