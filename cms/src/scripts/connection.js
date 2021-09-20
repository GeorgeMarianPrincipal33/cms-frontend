var axios = require("axios");
const BACKEND = "https://localhost:5001/Employee/";

const instance = axios.create({
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    crossorigin: "true",
  },
});

export async function getAllEmployees() {
  const url = BACKEND + "GetEmployees/";

  return instance.get(url);
}

export async function addEmployee(employee) {
  const url = BACKEND + "AddEmployee";

  return instance({
    method: "post",
    url: url,
    data: employee,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function removeEmployeeFromDb(employeeId) {
  const url = BACKEND + "RemoveEmployee" + `?id=${employeeId}`;

  return instance.delete(url);
}

export async function sortByName() {
  const url = BACKEND + "SortEmployees";

  return instance.get(url);
}

export async function searchByName(employeeName) {
  const url = BACKEND + "SearchEmployee" + `?name=${employeeName}`;

  return instance.get(url);
}
