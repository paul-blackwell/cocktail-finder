import React from "react";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-blueGray-200 text-4xl font-extrabold">Cocktail finder</h1>
        <p className="">Find your perfect cocktail today! Just click on the “Generate a cocktail” button to generate a random cocktail. </p>
      </Container>
    </div>
  );
}

export default App;
