import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../router/routes";
import { useSelector } from "react-redux";

import "./style.scss";

export default function Item() {
  const user = useSelector((state) => state.user);
  return (
    <Link className="navigation__link" to={routes.login}>
      Sign In ({user.username}) - {user.firstname} {user.lastname}
    </Link>
  );
}
