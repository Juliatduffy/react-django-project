import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // stuff that the page needs to "remember"
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState("");

  // get the list of states from the backend
  useEffect(() => {
    fetch("https://react-django-project-gqyz.onrender.com/api/states/")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  // search logic
  const normalizedQuery = search.trim().toLowerCase();
  const filteredStates = states.filter((s) => {
    if (!normalizedQuery) return true;
    const name = (s.name || "").toLowerCase();
    const abbr = (s.abbreviation || "").toLowerCase();
    return name.includes(normalizedQuery) || abbr.includes(normalizedQuery);
  });

  let content;
  if (filteredStates.length === 0) {
    content = <div>No results found.</div>;
  } else {
    content = filteredStates.map((s) => (
      <div className="state-card" key={s.id}>
        <h2>
          <strong>{s.name}</strong>
        </h2>
        <img
          src={`https://react-django-project-gqyz.onrender.com/media${s.img}`}
          className="state-img"
          alt={s.name}
        />
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
    ));
  }

  return (
    <div>
      <h1>My First React + Django Website!</h1>
      <h2>
        This unspectacular website is my first attempt at using a React + Django
        + SQLite + REST tech stack. Below are all of the states I have traveled
        to that I can remember, and some images from each which are being
        stored/ pulled from django's SQLite DB. I would love to do more with
        this website in the future.
      </h2>
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="state-grid">{content}</div>
    </div>
  );
}

export default App;
