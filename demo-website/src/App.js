import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import axios from "axios";
import Button from "./components/Button";
import Loader from "./components/Loader";

function App() {
  // Loader state
  const [makeRequest, setMakeRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState("");

  useEffect(() => {
    if (makeRequest) {
      console.log("I was fired");
      // Show loader
      setIsLoading(true);
      const request = async () => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/http://thecocktaildb.com/api/json/v1/1/random.php"
          )
          .then((res) => {
            // Make res take 3 seconds longer just to show loader for longer
            setTimeout(() => {
              setCocktail(res.data);
              setIsLoading(false);
            }, 3000);
            setMakeRequest(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      request();
    }
  }, [makeRequest]);

  // Just for testing
  useEffect(() => {
    console.log(cocktail);
  }, [cocktail]);

  /**
   * This will change the makeRequest state to true,
   * in turn firing the API call
   */
  const handleClick = () => {
    setMakeRequest(true);
  };

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
            <Button onClick={handleClick}>Generate a cocktail</Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
