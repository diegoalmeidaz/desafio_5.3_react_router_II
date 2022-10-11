import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css";

export default function Pokemones() {
  const [personaje, setPersonaje] = useState([]);
  const [seleccion, setSeleccion] = useState("");

  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  async function getPersonaje() {
    try {
      const response = await axios.get(url);
      const { data } = await response;
      const dataPersonaje = data.results;
      setPersonaje(dataPersonaje);
    } catch (error) {
      alert("Error en la llamada al servidor");
    }
  }

  useEffect(() => {
    getPersonaje();
  }, []);

  const irAPersonaje = async () => {
    if (seleccion) navigate(`/personajes/${seleccion}`);
    else alert("Debes Seleccionar un personaje");
  };

  const handlerInput = (evento) => {
    setSeleccion(evento.target.value);
  };

  return (
    <>
      <div className=" container ">
       
        <div className="mb-10 ">
          <h1 className="text-3xl text-black">Selecciona un Personaje</h1>
        </div>
        <select
          value={seleccion}
          onChange={handlerInput}
          placeholder="Personajes"
          className="border-[1px] border-black py-2 px-5 rounded-md"
        >
          <option>Personajes</option>
          {personaje.map(({ name }, i) => (
            <option key={i}>{name}</option>
          ))}
        </select>
        <div className="pt-7">
          <button
            onClick={irAPersonaje}
            className="text-white bg-red-600 rounded-md px-2 py-2 "
          >
            Ver Detalle
          </button>
        </div>
      </div>
      
    </>
  );
}
