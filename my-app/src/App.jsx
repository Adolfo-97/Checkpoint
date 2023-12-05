import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  function handleFetch(event) {
    setError("");
    setData("");
    event.preventDefault();
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => setError("Search another pokemon"));
  }

  return (
    <div>
      <form onSubmit={handleFetch}>
        <input
          type="text"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
        />
        <button type="submit">Fetch Pokemon</button>
      </form>
      {}
      {data && <img srcSet={data.sprites.front_default}></img>}
      {data && <h1>{data.name}</h1>}
      {data && <h1>{data.base_experience}</h1>}
      {
        <ul>
          {data &&
            data.abilities.map((ability) => <li> {ability.ability.name}</li>)}
        </ul>
      }
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
