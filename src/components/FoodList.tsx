import { FC } from 'react';
import { Food, Action } from '../reducer/foodReducer';
import FoodItem from './FoodItem';
interface FoodListProps {
  foods: Food[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}
const FoodList: FC<FoodListProps> = ({
  foods,
  handleEdit,
  dispatch
}) => {
  console.log(foods)
  return (
    <div className='foods-list'>
      <h3 className='foods-list-title'>List of Foods</h3>
      <div className='foods-list-table-container'>
        <table className='foods-list-table'>
          <thead className='foods-list-header'>
            <tr>
              <th>Food Name</th>
              <th>Expiration Date</th>
              <th>Purchase Date</th>
              <th>Freezer</th>
              <th>Open</th>
              <th>Location</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              foods.map((food) => (
                <FoodItem 
                  key={food.id} 
                  food={food}
                  handleEdit={handleEdit} 
                  dispatch={dispatch} 
                />))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FoodList;
