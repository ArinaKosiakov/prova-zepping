"use client";

import Link from "next/link";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import data from "../data/data.json";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [loginResult, setLoginResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://sicce-test.thingscloud.it/api/mobile/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const result = await response.json();

      if (result.result) {
        router.push("/personalpage");
        // Qui puoi gestire la logica per mostrare la schermata successiva
      } else {
        setLoginResult("Login fallito");
        setErrorMessage("Credenziali non valide, riprova.");
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
      setErrorMessage("Errore durante la connessione al server.");
    }
  };

  return (
    <div className="w-full flex min-h-full justify-center items-center flex-col">
      <form
        onSubmit={handleLogin}
        action=""
        className="bg-background-light border-transparent p-16 rounded-md shadow-md  w-1/2 h-1/2 flex flex-col justify-around items-center gap-4"
      >
        <input
          type="text"
          placeholder="Nome"
          className="  bg-white p-3 rounded-md w-full h-1/5 shadow-sm"
        />
        <input
          type="text"
          placeholder="Cognome"
          className="p-3 rounded-md w-full h-1/5 shadow-sm"
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md w-full h-1/5 shadow-sm"
        />
        <input
          type={type}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="p-3 rounded-md w-full h-1/5 shadow-sm"
        />
        <Dropdown
          id="dropbox"
          title="Nazionalità"
          data={data}
          hasImage={true}
        />
        {/* <input
          list="nationality"
          id="countries"
          name="countries"
          placeholder="Nazionalità"
          className="p-3 rounded-md w-full h-1/5 shadow-sm"
        />
        <datalist id="nationality">
          <option value="Italia"></option>
          <option value="Francia"></option>
          <option value="Germania" />
        </datalist> */}

        <div className="w-full flex flex-row justify-between  font-semibold mt-10">
          <div className="flex justify-center">
            <input
              className="accent-white w-6 h-6 text-light-blue rounded-sm shadow-sm border-light-gray"
              type="checkbox"
              name="ricordami"
            />
            <label htmlFor="" className="pl-2">
              Ricordami
            </label>
          </div>

          <Link href={""} className="text-dark-blue underline">
            Password dimenticata?
          </Link>
        </div>
        <button className="rounded-md text-center bg-light-blue text-white w-full py-3">
          Login
        </button>

        <div className="w-full mt-20 text-center">
          <p className="font-semibold mb-2">Non hai ancora un account?</p>
          <button
            type="submit"
            className="rounded-md  bg-dark-blue text-white w-full py-3"
          >
            Registrati
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
