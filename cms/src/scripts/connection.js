const BACKEND = "https://localhost:5001/Employee/";

export async function getAllEmployees() {
  const url = BACKEND + "GetEmployees/";

  var axios = require("axios");

  const instance = axios.create({
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      crossorigin: "true",
    },
  });

  return instance.get(url);
}
