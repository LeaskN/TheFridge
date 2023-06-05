import React, { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Action, Food } from '../reducer/foodReducer';

interface FoodFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Food | undefined;
  toggleModal: () => void;
}

const FoodForm: FC<FoodFormProps> = ({ dispatch, dataToEdit, toggleModal}) => {
  const [food, setFood] = useState({
    foodName: dataToEdit?.foodName ? dataToEdit.foodName : '',
    purchasedDate: dataToEdit?.purchasedDate ? dataToEdit.purchasedDate : '',
    expirationDate: dataToEdit?.expirationDate ? dataToEdit.expirationDate : ''
  });
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFood((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!dataToEdit){
      dispatch({
        type: 'ADD_FOOD',
        payload: {
          id: Date.now(),
          ...food
        }
      });
      setFood({
        foodName: '',
        expirationDate:'',
        purchasedDate:''
      })
    } else {
      dispatch({
        type: 'UPDATE_FOOD',
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...food
          }
        }
      });
      toggleModal();
    }
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
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='purchasedDate'>
        <Form.Label>Purchased Date</Form.Label>
        <Form.Control
          className='purchasedDate'
          name='purchasedDate'
          value={food.purchasedDate}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='expirationDate'>
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          className='expirationDate'
          name='expirationDate'
          value={food.expirationDate}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
        {dataToEdit ? 'Update Food' : 'Add Food'}
        </Button>
      </Form.Group>
    </Form>
  );
};
export default FoodForm;