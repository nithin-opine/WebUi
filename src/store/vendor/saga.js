import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  GET_VENDORS,
  GET_VENDOR_DETAILS,
  GET_ITEM_DETAILS,
} from "./actionTypes";
import { BaseUrl } from "../../config/BaseUrl";
import { apiGet } from "../../config/apiConfig";
import { vendorList, setVendorDetails, setItemDetails } from "./actions";

function* vendorfetcher() {
  const response = yield fetch(
    "http://207.180.228.92:8080/annasree-0.0.1-SNAPSHOT/api/public/home/get_popular_nearby_list/10.797545/76.758892"
  )
    .then((res) => res.json())
    .then((data) => data);
  console.log(response);
  yield put(vendorList(response));
}

function* vendorDetailsfetcher(action) {
  try {
    const id = action.payload;
    const Url = BaseUrl.apiUrl.baseUrl + "api/public/openmerchantbranch/" + id;
    const response = yield call(apiGet, Url);
    console.log("response is", response.response);
    yield put(setVendorDetails(response.response.data));
  } catch (error) {
    console.log("error");
  }
}

function* itemDetailsfetcher(action) {
  try {
    const itemid = action.payload.itemid;
    const rid = action.payload.rid;
    const Url =
      BaseUrl.apiUrl.baseUrl +
      "api/public/resataurantaddons/" +
      rid +
      "/" +
      itemid;

    const response = yield call(apiGet, Url);

    yield put(setItemDetails(response.response.data));
  } catch (error) {
    console.log("error");
  }
}

function* watchVendorFetcher() {
  yield takeEvery(GET_VENDORS, vendorfetcher);
}
function* watchVendorDetailsFetcher() {
  yield takeEvery(GET_VENDOR_DETAILS, vendorDetailsfetcher);
}
function* watchitemDetailsfetcher() {
  yield takeEvery(GET_ITEM_DETAILS, itemDetailsfetcher);
}

function* vendorSaga() {
  yield all([
    fork(watchVendorFetcher),
    fork(watchVendorDetailsFetcher),
    fork(watchitemDetailsfetcher),
  ]);
}

export default vendorSaga;
