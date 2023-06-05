import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ name, image, calories, servings, onDelete }) {
  return (
    <Col span={8}> {/* Add the span property */}
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={onDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
