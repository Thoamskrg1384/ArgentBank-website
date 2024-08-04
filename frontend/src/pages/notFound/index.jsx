import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import LayoutDefault from "../../layouts/default";

export default function NotFound() {
  return (
    <LayoutDefault>
      <h1>Page introuvable</h1>
      <Link to={routes.home}>Retour à l&apos;accueil</Link>
    </LayoutDefault>
  );
}
