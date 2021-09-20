<template>
  <div>
    <modal
      v-if="showModal"
      @close-modal="toggleModal()"
      @create-employee="addNewEmployee"
    ></modal>

    <div class="center">
      <div>
        <user-buttons @add-employee="toggleModal()"></user-buttons>
        <employee-table
          :entries="tableEntries"
          @remove-employee="removeEmployee"
        ></employee-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllEmployees } from './scripts/connection.js'

import EmployeeTable from "./components/EmployeeTable.vue";
import UserButtons from "./components/UseButtons.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { EmployeeTable, UserButtons, Modal },

  data() {
    getAllEmployees().then((response) => {
      this.tableEntries = response.data
    })

    return {
      showModal: false,
      tableEntries: [],
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    addNewEmployee(employee) {
      //send to backend

      employee["id"] = this.tableEntries[this.tableEntries.length - 1].id + 1;

      var imageReader = new FileReader();
      imageReader.addEventListener("load", () => {
        var profilePic = imageReader.result;
        employee.profileImage = profilePic;

        // for testing
        this.tableEntries.push(employee);
      });

      if (employee.profileImage == null) {
        employee.profileImage = "undefined";
        // for testing
        this.tableEntries.push(employee);
      } else {
        imageReader.readAsDataURL(employee.profileImage);
      }
    },

    removeEmployee(id) {
      this.tableEntries = this.tableEntries.filter(
        (element) => element.id !== id
      );
    },
  },
};
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
