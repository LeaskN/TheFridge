import React, { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Action } from '../reducer/foodReducer';

interface FoodFormProps {
    dispatch: React.Dispatch<Action>;
}

const FoodForm: FC<FoodFormProps> = ({ dispatch }) => {
  const [food, setContact] = useState({
    foodName: '',
    purchasedDate: '',
    expirationDate: ''
  });
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(food);
    dispatch({
        type: 'ADD_FOOD', 
        payload: food
    })
  };
  return (
    <Form onSubmit={handleOnSubmit} className='food-form'>
      <Form.Group controlId='foodName'>
        <Form.Label>Food Name</Form.Label>
        <Form.Control
          className='foodName'
          name='foodName'
          value={food.foodName}
          type='text'
          onChange = { handleOnChange }
        />
      </Form.Group>
      <Form.Group controlId='purchasedDate'>
        <Form.Label>Purchased Date</Form.Label>
        <Form.Control
          className='purchasedDate'
          name='purchasedDate'
          value={food.purchasedDate}
          type='text'
          onChange = { handleOnChange }
        />
      </Form.Group>
      <Form.Group controlId='expirationDate'>
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          className='expirationDate'
          name='expirationDate'
          value={food.expirationDate}
          type='text'
          onChange = { handleOnChange }
        />
      </Form.Group>
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
          Add Food
        </Button>
      </Form.Group>
    </Form>
  );
};
export default FoodForm;