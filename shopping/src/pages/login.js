import React from "react";
import { Forms, inputForms } from "./../components";

export default function Login() {
  return (
    <div>
      <Forms actionForm="" methodForm="POST">
        <label htmlFor="user">Usuario</label>
        <inputForms typeInput="text" text="user..." idInput="user" />
        <label htmlFor="pass">Contrasena</label>
        <inputForms typeInput="password" text="password..." idInput="pass" />
        <br />
        <inputForms
          typeInput="submit"
          text="Iniciar Sesion"
          idInput="loginButton"
        />
      </Forms>
    </div>
  );
}
