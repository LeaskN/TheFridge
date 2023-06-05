export interface Food {
    foodName: string;
    purchasedDate: string;
    expirationDate: string;
  }
  export interface Action {
    type: 'ADD_FOOD'
    payload: Food;
  }
  export interface State {
    foods: Food[];
  }

export const foodsReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'ADD_FOOD':
        return {
          ...state,
          foods: [...state.foods, action.payload]
        };
      default:
        return state;
    }
  };