import React, { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Action, Food } from '../reducer/foodReducer';

interface FoodFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Food | undefined;
  toggleModal: () => void;
}

const FoodForm: FC<FoodFormProps> = ({ dispatch, dataToEdit, toggleModal }) => {
  const [food, setFood] = useState({
    foodName: dataToEdit?.foodName ? dataToEdit.foodName : '',
    purchasedDate: dataToEdit?.purchasedDate ? dataToEdit.purchasedDate : '',
    expirationDate: dataToEdit?.expirationDate ? dataToEdit.expirationDate : '',
    freezer: dataToEdit?.freezer ? dataToEdit.freezer : '',
    open: dataToEdit?.open ? dataToEdit.open : '',
    location: dataToEdit?.location ? dataToEdit.location : '',
    title: dataToEdit?.title ? dataToEdit.title : '',
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
    if (!dataToEdit) {
      dispatch({
        type: 'ADD_FOOD',
        payload: {
          id: Date.now(),
          ...food
        }
      });
      setFood({
        foodName: '',
        purchasedDate: '',
        expirationDate: '',
        freezer: '',
        open: '',
        location: '',
        title: '',
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
      {/* <ul>
      {Object.keys(food).map((key) => {
        return <li>{key}: {food[key]}</li>
      })}
      </ul> */}
      {Object.keys(food).map((key) => {
        return <Form.Group controlId='foodName'>
          <Form.Label>{key}</Form.Label>
          <Form.Control
            className={key}
            name={key}
            value={food[key]}
            type='text'
            onChange={handleOnChange}
          />
          {/* {key}: {food[key]} */}
          </Form.Group>
      })}
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
          {dataToEdit ? 'Update Food' : 'Add Food'}
        </Button>
      </Form.Group>
    </Form>
  );
};
export default FoodForm;