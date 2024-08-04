import React, { useState } from "react";
import LayoutDefault from "../../layouts/default";
import { setUsername, setProfile, setToken } from "../../features/userSlice";
import { useDispatch } from "react-redux";

// https://www.wesoftonline.fr/blog/comprendre-react-et-son-state-manager-redux-toolkit

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // On récupère le token de connexion via un fetch (on envoi adresse email + mot de passe) sur le serveur
    // TODO : faire le fetch après avoir récupérer les informations du formulaire
    console.log(email, password);

    const token = "mySUperToken"; // On simule un token de connexion reçu via le fetch

    // Puis on le sauvegarde dans redux pour l'utiliser dans toute l'application
    //const username = email + " " + password;
    //dispatch(setUsername(username));

    //dispatch(
    //  setProfile({
    //    firstname: "John",
    //    lastname: "Doe",
    //  })
    //);

    dispatch(setToken(token));
  };

  return (
    <LayoutDefault>
      Login
      <form>
        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" onClick={onSubmit}>
            Se connecter
          </button>
        </div>
      </form>
    </LayoutDefault>
  );
}
