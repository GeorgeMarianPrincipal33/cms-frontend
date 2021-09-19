<template>
  <div>
    <modal v-if="showModal" @close-modal="toggleModal()" @create-employee="addNewEmployee"></modal>

    <div class="center">
    <div>
      <user-buttons @add-employee="toggleModal()"></user-buttons>
      <employee-table :entries="tableEntries"></employee-table>
    </div>
    
    </div>
  </div>
</template>

<script>
// import { getAllEmployees } from './scripts/connection.js'

import EmployeeTable from './components/EmployeeTable.vue'
import UserButtons from './components/UseButtons.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { EmployeeTable, UserButtons, Modal },

  data() {
    // getAllEmployees()
    return {
      showModal: false,
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

  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },

    addNewEmployee(employee){
      //send to backend

      // for testing
      this.tableEntries.push(employee)
    }
  }
  
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
