import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodSearch from './components/FoodSearch';

function App() {
  const [foodList, setfoodList] = useState(foods)
  const [inputSearch, setInputSearch] = useState("")

  const addNewFood = (newFood) => {
    // console.log('NEWFOOD >>>', newFood);
    setfoodList([...foodList, newFood]);
  };
  // console.log("FOODS >>>", foodList);

  let searchedFood = null
  if (inputSearch !== "") {
    searchedFood = foodList.filter((food) => {
      return food.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
    })
  } else {
    searchedFood = foodList
  }

  return (
    <div className="App">
      <h1>Foods list</h1>
      <FoodSearch
        inputSearch={inputSearch}
        callbackSearch={setInputSearch} />
      <FoodBox foods={foodList} searchedFood={searchedFood} />
      <h1>Add new food</h1>
      <AddFood createHandler={addNewFood} />
    </div>
  );
}

export default App;
