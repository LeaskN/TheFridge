import { useReducer } from 'react';
import FoodForm from './components/FoodForm';
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
      </div>
    </div>
  );
}
export default App;
