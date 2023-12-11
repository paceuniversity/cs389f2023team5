import { useState } from "react";
import "../App.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function Find() {
  const [results, setResults] = useState([]);

  return (
  <div className="App">
    <div className="search-bar-container">
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results}/>
      </div>
    </div>
  );
}

export default Find;