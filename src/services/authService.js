import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";

async function login(requestData) {
  let { data: responseData } = await http.post(
    `${apiEndpoint}/login`,
    requestData
  );
  let { data } = responseData;

  localStorage.setItem("token", data.token);
  return data;
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

async function logout() {
  localStorage.removeItem("token");
}

export async function register(requestData) {
  await http.post(`${apiEndpoint}/register`, requestData);
}
const exportedObject = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default exportedObject;
