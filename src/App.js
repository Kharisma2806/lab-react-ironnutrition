import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleDeleteFood = (index) => {
    const updatedFoodList = [...foodList];
    updatedFoodList.splice(index, 1);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...foodList, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };

   return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <Row gutter={[16, 16]}>
        {filteredFoodList.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            image={food.image}
            calories={food.calories}
            servings={food.servings}
            onDelete={() => handleDeleteFood(index)}
          />
        ))}
      </Row>
      <AddFoodForm onAddFood={handleAddFood} />
    </div>
  );
}

export default App;