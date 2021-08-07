import http from "./httpService";
import { apiUrl } from "../config.json";

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

export async function register(requestData) {
  await http.post(`${apiEndpoint}/register`, requestData);
}
const exportedObject = {
  login,
  register,
};

export default exportedObject;
