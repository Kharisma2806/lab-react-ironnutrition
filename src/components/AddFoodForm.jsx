import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleAddFood = () => {
    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings)
    };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <h2>Add Food Entry</h2>
      <Input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
    
      <Input
        value={image}
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <Input
        value={calories}
        placeholder="Calories"
        type="number"
        onChange={(e) => setCalories(e.target.value)}
      />
      <Input
        value={servings}
        placeholder="Servings"
        type="number"
        onChange={(e) => setServings(e.target.value)}
      />
      <Button type="primary" onClick={handleAddFood}>
        Create
      </Button>
    </div>
  );
}

export default AddFoodForm;
