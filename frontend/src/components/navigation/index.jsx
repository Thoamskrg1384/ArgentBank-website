import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import argentBankLogo from "../../../../backend/designs/img/argentBankLogo.png"
import Item from "./item";

import "./style.scss";

export default function Navigation() {
  return (
    <nav className="navigation">
          <Link  to={routes.home} className={'navigation__image'}>
              <img src={argentBankLogo} alt="Retour à la page d'accueil" />
          </Link>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Item />
        </li>
      </ul>
      
    </nav>
  );
}
