import { useReducer } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';
import Header from './components/Header';
import { foodsReducer, State } from './reducer/foodReducer';
const initialState: State = {
  foods: []
};

function App() {
  const [state, dispatch] = useReducer(foodsReducer, initialState);
  console.log('state', state);
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <FoodForm dispatch={dispatch} />
        {state.foods.length > 0 && <FoodList foods={state.foods} />}
      </div>
    </div>
  );
}
export default App;
