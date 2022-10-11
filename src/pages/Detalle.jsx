import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const Detalle = () => {
  const [personaje, setPersonaje] = useState([]);
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  async function getPersonaje() {
    try {
      const response = await axios.get(url);
      const { data } = await response;
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const types = data.types.map(({ type }) => type.name).join(" ");
      setPersonaje({ name, stats, src, types });
    } catch (error) {
      console.log(error);
      alert("Error en la llamada al servidor, intenta de nuevo refrescando el sitio")
    }
  };

  useEffect(() => {
    getPersonaje(name);
  },);

  return (
    <>
      <Card personaje={personaje}></Card>
    </>
  );
};

export default Detalle;
