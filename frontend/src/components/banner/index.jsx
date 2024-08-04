import React from "react";
// import banktree from "../../../../backend/designs/img/bank-tree.jpeg"

import "./style.scss";

export default function Banner() {
  return <div className="banner">
            <div className="banner__content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees</p>
                <p className="subtitle">No minimum deposit</p>
                <p className="subtitle">Hight interest rates</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
          </div>
}
