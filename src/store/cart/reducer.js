import { GET_CART, SET_CART } from "./actionTypes";
const initialState = {
  loading: true,
  cart: "",
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case SET_CART: {
      state = {
        ...state,
        loading: true,
        cart: action.payload,
      };
      break;
    }
  }
  return state;
};

export default cart;
