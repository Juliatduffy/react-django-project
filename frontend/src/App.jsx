import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // stuff that the page needs to "remember"
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/states/")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  return (
    <div>
      <h1>My First React + Django Website!</h1>
      <h2>
        This unspectacular website is my first attempt at using a Django backend
        with a React frontend. Below are all of the states I have traveled to
        that I can remember, which are being stored/ pulled from django's SQLite
        DB.
      </h2>
      <div className="state-grid">
        {states.map((s) => (
          <div className="state-card" key={s.id}>
            <img
              src={`http://127.0.0.1:8000${s.img}`}
              className="state-img"
              alt={s.name}
            />
            <h2>{s.name}</h2>
            <p>
              <strong>Abbreviation: </strong>
              {s.abbreviation}
            </p>
            <p>
              <strong>Capital: </strong>
              {s.capital}
            </p>
            <p>
              <strong>Population: </strong> {s.population}
            </p>
            <p>
              <strong>Nickname: </strong> {s.nickname}
            </p>
            <p>
              <strong>State Bird: </strong> {s.bird}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
