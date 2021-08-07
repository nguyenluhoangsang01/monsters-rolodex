import { useEffect, useState } from "react";
import axios from "axios";
import CartList from "./components/CartList";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setMonsters(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Monsters Rolodex</h1>

      <SearchBox
        placeholder="Search Monsters"
        handleChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      {filteredMonsters.length > 0 ? (
        <CartList monsters={filteredMonsters} />
      ) : (
        "Not Found"
      )}
    </>
  );
}

export default App;
