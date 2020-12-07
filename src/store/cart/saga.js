import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_CART } from "./actionTypes";
import { setCart } from "./actions";
import { BaseUrl } from "../../config/BaseUrl";
import { apiGet } from "../../config/apiConfig";

function* cartFetcher(action) {
  try {
    const userid = action.payload.userid;

    const Url =
      BaseUrl.apiUrl.baseUrl + "api/public/view_all_cart_mob/" + userid;
    console.log(Url);
    const response = yield call(apiGet, Url);
    console.log("response is", response.response);
    yield put(setCart(response.response.data));
  } catch (error) {
    console.log("error");
  }
}

export function* watchCartFetcher() {
  yield takeEvery(GET_CART, cartFetcher);
}

function* cartSaga() {
  yield all([fork(watchCartFetcher)]);
}

export default cartSaga;
