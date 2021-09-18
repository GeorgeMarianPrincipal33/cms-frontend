import { axios } from "axios"

const BACKEND = 'https://localhost:44344/Employee/'

export async function getAllEmployees(){
    let employees = await axios.get(BACKEND + 'GetEmployees/')

    return employees
}