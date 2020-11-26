import { GET_CART, SET_CART } from "./actionTypes";

export const getCart = (userid) => {
  console.log("GET_CART CALLED WITH USERID", userid);
  return {
    type: GET_CART,
    payload: { userid },
  };
};

export const setCart = (cart_data) => {
  console.log("cart_reposnse", cart_data);
  return {
    type: SET_CART,
    payload: { cart_data },
  };
};
