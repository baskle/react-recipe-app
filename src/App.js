import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const { KeyVault } = require("./secrets.json");

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${KeyVault.APP_ID}&app_key=${KeyVault.APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log("changed");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <div className="App">
        <form className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-button" type="submit">
            Suche
          </button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </Router>
  );
};

export default App;
