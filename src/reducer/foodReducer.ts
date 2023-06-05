export interface Food {
    id: number;
    foodName: string;
    purchasedDate: string;
    expirationDate: string;
  }
export interface Update {
  id: number;
  updates?: Food;
}
export interface Action {
  type: 'ADD_FOOD' | 'UPDATE_FOOD' | 'DELETE_FOOD'
  payload: Food | Update;
}
export interface State {
  foods: Food[];
}

export const foodsReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'DELETE_FOOD': {
        const { id } = action.payload;
        return {
          ...state,
          foods: state.foods.filter((food) => food.id !== id)
        };
      }
      case 'ADD_FOOD':
        return {
          ...state,
          foods: [...state.foods, action.payload as Food]
        };
      case 'UPDATE_FOOD':
        const { id, updates } = action.payload as Update;
        return {
          ...state,
          foods: state.foods.map((food) => {
            if (food.id === id) {
              return {
                ...food,
                ...updates
              };
            }
            return food;
          })
        };
      default:
        return state;
    }
};