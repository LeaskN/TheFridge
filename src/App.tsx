import { useEffect, useReducer, useState } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';
import EditModal from './components/EditModal';
import Header from './components/Header';
import { Food, foodsReducer, State } from './reducer/foodReducer';
const initialState: State = {
  foods: []
};

function App() {
  const [state, dispatch] = useReducer(foodsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);
  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);
  const toggleModal = () => {
    setShowModal((show) => !show);
  };
  const handleEdit = (id: number) => {
    setDataToEdit(state.foods.find((food) => food.id === id));
    toggleModal();
  };
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <FoodForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.foods.length > 0 && (
          <FoodList
            foods={state.foods}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  );
}
export default App;
