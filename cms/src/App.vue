<template>
  <div class="center">
    <div>
      <user-buttons></user-buttons>
      <employee-table :entries="tableEntries"></employee-table>
    </div>
    
  </div>
</template>

<script>
// import { getAllEmployees } from './scripts/connection.js'

import EmployeeTable from './components/EmployeeTable.vue'
import UserButtons from './components/UseButtons.vue'


export default {
  name: 'App',
  components: { EmployeeTable, UserButtons },

  data() {
    // getAllEmployees()
    return {
      tableEntries: [
        {
          id: 1,
          name: "testr54353",
          surname: "surtest",
          email: "test@email.com",
          gender: 1,
          birthdate: "2021-10-10",
          profileImage: "undefined"
        }         
      ]
    }
  },
  
}
</script>

<style>

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 50vh;
}
</style>
