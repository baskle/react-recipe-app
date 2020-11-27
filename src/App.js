import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "e7de1eaf";
  const APP_KEY = "0c66e30803206c41ffd23177884443f9";

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
