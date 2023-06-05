import { FC } from 'react';
import { Food } from '../reducer/foodReducer';
interface FoodListProps {
  foods: Food[];
}
const FoodList: FC<FoodListProps> = ({ foods }) => {
  return (
    <div className='foods-list'>
      <h3 className='foods-list-title'>List of Foods</h3>
      <div className='foods-list-table-container'>
        <table className='foods-list-table'>
          <thead className='foods-list-header'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(({ foodName, expirationDate, purchasedDate }) => (
              <tr>
                <td>{foodName}</td>
                <td>{expirationDate}</td>
                <td>{purchasedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FoodList;
