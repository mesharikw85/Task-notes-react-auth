import jwtDecode from "jwt-decode";
import instance from ".";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const Key in userInfo) formData.append(Key, userInfo[Key]);

    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  try {
    const { data } = await instance.get("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("/auth/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecod(token);

    const currentTime = Date.now() / 10000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
    }
    return true;
  }
  return false;
};

const logOut = () => {
  localStorage.removeItem("token");
};

export { login, register, me, getAllUsers, checkToken, logOut };
