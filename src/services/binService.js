import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/bin";

http.setJwt(getJwt());

async function getAllBins() {
  let { data: responseData } = await http.get(`${apiEndpoint}/`);
  let { data } = responseData;
  console.log(data)
  return data;
}

async function saveBin(requestData) {
  let { data: responseData } = await http.post(`${apiEndpoint}/`, requestData);
  let { data } = responseData;
  console.log("data here ", responseData);
  return data;
}

async function updateBin(requestData) {
  let { data: responseData } = await http.put(`${apiEndpoint}/`, requestData);
  let { data } = responseData;
  return data;
}

export function getJwt() {
  return localStorage.getItem("token");
}

const exportedObject = {
    getAllBins,
  saveBin,
  updateBin,
};

export default exportedObject;
