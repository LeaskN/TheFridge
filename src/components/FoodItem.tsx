import { FC } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Action, Food } from '../reducer/foodReducer';

interface ExtraProps {
  handleEdit: (id:number) => void;
  dispatch: React.Dispatch<Action>;
}

// type FoodProps = FoodType & ExtraProps;

const FoodItem: FC<Food & ExtraProps> = ({ id, foodName, expirationDate, purchasedDate, handleEdit, dispatch }) => {
  return (
    <tr>
      <td>{foodName}</td>
      <td>{expirationDate}</td>
      <td>{purchasedDate}</td>
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