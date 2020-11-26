import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { loginSuccess, logoutUserSuccess, apiError } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
} from "../../../helpers/fakebackend_helper";
import { apiGet } from "../../../config/apiConfig";
import { BaseUrl } from "../../../config/BaseUrl";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user, history } }) {
  console.log("fdgdgfdfgdfgdf", process.env.REACT_APP_DEFAULTAUTH);
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(loginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, "login", {
        username: user.username,
        password: user.password,
      });

      console.log("respppp", response.headers.authorization);
      const ac = response.headers.authorization;
      localStorage.setItem("accessToken", ac);
      localStorage.setItem("authUser", JSON.stringify(response));
      localStorage.setItem("username", response.data.body.data.username);
      const usrname = response.data.body.data.username;
      const Url =
        BaseUrl.apiUrl.baseUrl + "api/public/customer_by_username/" + usrname;
      const idresponse = yield call(apiGet, Url);
      localStorage.setItem("userid", idresponse.response.data.registerId);
      yield put(loginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(postFakeLogin, "/post-fake-login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(response));
    }
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* authSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
