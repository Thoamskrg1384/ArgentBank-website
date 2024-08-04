import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";
import { useSelector } from "react-redux";

export default function User() {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    // On récupère le token stocké dans redux avec useSelector
    const token = user.token;

    // On fait un fetch au serveur pour récupérer les informations de l'utilisateur
    //.then(response => {
    //if (response.ok) {
    // Si OK alors on affiche la page
    //setIsLoading(false);
    //} else {
    // Sinon on redirige vers la page de connexion
    //}
    //}
  }, []);

  //if (isLoading) {
  //return <LayoutDefault>Loading...</LayoutDefault>;
  //}

  return <LayoutDefault>User</LayoutDefault>;
}
