import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Action, Food } from '../reducer/foodReducer';

interface ExtraProps {
  handleEdit: (id:number) => void;
  dispatch: React.Dispatch<Action>;
  food: Food[];
}

// type FoodProps = FoodType & ExtraProps;

const FoodItem: FC<Food & ExtraProps> = ({ id, food, handleEdit, dispatch }) => {
  return (
    <tr>
      {console.log(Object.keys(food).map((item) => food[item]))}
      {
        Object.keys(food)
        .filter(item => item !== 'id' && item !== 'title')
        .map(item => <td>{food[item]}</td>)
      } 
     

      <td>
        <AiFillEdit size={20} onClick={() => handleEdit(id)} className='icon' />
      </td>
      <td>
        <AiFillDelete
          size={20}
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete ${foodName}?`
            );
            if (confirmDelete) {
              dispatch({
                type: 'DELETE_FOOD',
                payload: { id }
              });
            }
          }}
          className='icon'
        />
      </td>
    </tr>
  );
};

export default FoodItem;