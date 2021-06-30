import { ADD_FOOD, DEL_FOOD } from './types';

export const addFood = (food) => (
  {
    type: ADD_FOOD,
    data: food
  }
);

export const delFood = (key) => (
  {
    type: DEL_FOOD,
    key: key
  }
);