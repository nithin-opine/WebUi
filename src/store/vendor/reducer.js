import {
  GET_VENDORS,
  GET_VENDORS_SUCCESS,
  GET_VENDOR_DETAILS,
  GET_VENDOR_DETAILS_SUCCESS,
  GET_ITEM_DETAILS,
  SET_ITEM_DETAILS,
} from "./actionTypes";

const initialState = {
  loading: true,
  error: "kjhh",
  vendorlist: [],
  vendordetails: "",
  itemdetails: "",
};

const vendors = (state = initialState, action) => {
  switch (action.type) {
    case GET_VENDORS:
      state = {
        ...state,
        loading: true,
      };
      break;

    case GET_VENDORS_SUCCESS:
      state = {
        ...state,
        loading: false,
        vendorlist: action.payload.vendors,
      };

      break;

    case GET_VENDOR_DETAILS:
      console.log(" called reducer GET_VENDOR_DETAILS ");
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_VENDOR_DETAILS_SUCCESS:
      console.log(" called reducer GET_VENDOR_DETAILS ");
      state = {
        ...state,
        loading: true,
        vendordetails: action.payload.vendordetails,
      };
      break;
    case GET_ITEM_DETAILS:
      console.log(" called reducer GET_ITEM_DETAILS ");
      state = {
        ...state,
        loading: true,
      };
      break;
    case SET_ITEM_DETAILS:
      console.log(" called reducer SET_ITEM_DETAILS ");
      state = {
        ...state,
        loading: true,
        itemdetails: action.payload,
      };
      break;

    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default vendors;
