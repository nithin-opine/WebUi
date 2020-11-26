import {
  GET_VENDORS,
  GET_VENDORS_SUCCESS,
  GET_VENDOR_DETAILS,
  GET_VENDOR_DETAILS_SUCCESS,
  GET_ITEM_DETAILS,
  SET_ITEM_DETAILS,
} from "./actionTypes";

export const getVendors = () => {
  return { type: GET_VENDORS };
};

export const vendorList = (vendors) => {
  return {
    type: GET_VENDORS_SUCCESS,
    payload: { vendors },
  };
};

export const getVendorDetails = (id) => {
  console.log(" called action GET_VENDOR_DETAILS ");
  console.log("vendors is", id);
  return { type: GET_VENDOR_DETAILS, payload: id };
};
export const setVendorDetails = (vendordetails) => {
  return { type: GET_VENDOR_DETAILS_SUCCESS, payload: { vendordetails } };
};

export const getItemDetails = (itemid, rid) => {
  console.log("fetching", itemid, rid);
  return { type: GET_ITEM_DETAILS, payload: { itemid, rid } };
};
export const setItemDetails = (itemdetails) => {
  console.log("fetched");
  return { type: SET_ITEM_DETAILS, payload: { itemdetails } };
};
