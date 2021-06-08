import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import axios from "axios";
import Button from "./components/Button";
import Loader from "./components/Loader";

function App() {
  // Loader state
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Container>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <h1 className="text-blueGray-800 text-4xl font-extrabold mb-5 mt-4">
              Cocktail finder
            </h1>
            <p className="text-blueGray-500 mb-12">
              Find your perfect cocktail today! Just click on the “Generate a
              cocktail” button to generate a random cocktail.{" "}
            </p>
            <img
              className="w-auto h-image mb-12"
              src="/cocktail_one.svg"
              alt="cocktail"
            ></img>
            <Button
              onClick={() => {
                setIsLoading(true)
              }}
            >
              Generate a cocktail
            </Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
