// import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";

const URL_200 = "https://pokeapi.co/api/v2/pokemon/ditto";
const URL_401 = "https://api.spoonacular.com/recipes/complexSearch";
const URL_404 = "https://pokeapi.co/api/v2/pokemon/notarealpokemon";

// even though status code of response is 401, which should be an APIError, the catch block won't run
// because fetch does not recognize non-2xx status code response as error
function fetchWithoutErrorClassification() {
  fetch(URL_401)
    .then((response) => response.json())
    .then((json) => {
      console.log("[SUCCESS]", json);
    })
    .catch((error) => {
      console.log("[ERROR]", error);
    });
}

function App() {
  React.useEffect(() => {
    console.clear();
    fetchWithoutErrorClassification();
  }, []);
  return <div style={{ padding: "100px 300px" }}>Error Handling Demo</div>;
}

export default App;
