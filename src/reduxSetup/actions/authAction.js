import { API } from "../../dynamicPathSetup.js";
import { USER_DATA } from "../constants/constants.js";
import { USER_LOGOUT } from "../constants/constants.js";

export const authAction = () => async (dispatch) => {
  const { data } = await API.get("/api/auth/currentUser", {
    withCredentials: true,
  });

  console.log(data);

  dispatch({
    type: USER_DATA,
    payload: {
      user: data.user,
    },
  });

  localStorage.setItem("userInfo", JSON.stringify(data.user));
};

export const logOutAction = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  await API.get("/api/auth/logout", {
    withCredentials: true,
  });
  dispatch({
    type: USER_LOGOUT,
    payload: {
      user: null,
    },
  });
};
