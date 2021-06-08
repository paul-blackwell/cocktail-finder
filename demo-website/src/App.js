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
      // Show loader
      setIsLoading(true);

      // Make request
      const request = async () => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/http://thecocktaildb.com/api/json/v1/1/random.php"
          )
          .then((res) => {
            // Make res take 3 seconds longer just to show loader for longer
            setTimeout(() => {

              /**
               * As the API doesn't return the ingredients as an array we will
               * have to make one containing all the ingredients. Then will will
               * setCocktail state to the response and add our new array to it.
               */
              const ingredients = [];
               for (const [key, value] of Object.entries(res.data.drinks[0])) {
                if(key.includes('strIngredient') && value !== null){
                   ingredients.push(`${value}`);
                }
              }
              setCocktail({...res.data.drinks[0], ingredients: ingredients});
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
    console.log(cocktail.ingredients);
  }, [cocktail]);

  /**
   * This will change the makeRequest state to true,
   * in turn firing the API call
   */
  const handleClick = () => {
    setMakeRequest(true);
  };

  if(cocktail !== '') {
    
  }

  return (
    <div className="App">
      <Container>
        {isLoading && <Loader />}
        {cocktail === "" && !isLoading && (
          <>
            <h1 className="text-blueGray-800 text-4xl font-extrabold mb-5 mt-4">
              Cocktail finder
            </h1>
            <p className="text-blueGray-500 mb-12 text-base">
              Find your perfect cocktail today! Just click on the “Generate a
              cocktail” button to generate a random cocktail.
            </p>
            <img
              className="w-auto h-image mb-12"
              src="/cocktail_one.svg"
              alt="cocktail"
            ></img>
            <Button onClick={handleClick}>Generate a cocktail</Button>
          </>
        )}
        {cocktail !== '' && !isLoading && (
          <>
            <h1 className="text-blueGray-800 text-4xl font-extrabold mb-5 mt-4">
              {cocktail.strDrink}
            </h1>
            <img
              className="w-auto h-image mt-8 mb-12 rounded-lg"
              src={cocktail.strDrinkThumb}
              alt="cocktail"
            ></img>
            <p className="font-bold text-lg w-full mb-2 text-blueGray-800">📙 Instructions</p>
            <p className="mb-8 text-blueGray-500 text-base">{cocktail.strInstructions}</p>
            <p className="font-bold text-lg w-full mb-2 text-blueGray-800">🍹 Ingredients</p>
            <ul className="mb-8 text-blueGray-500 text-base w-full list-inside">
                <li>Some Ingredient</li>
            </ul>
            <Button onClick={handleClick}>Generate a cocktail</Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
