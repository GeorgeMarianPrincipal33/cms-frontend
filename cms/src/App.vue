<template>
  <div>
    <modal
      v-if="showModal"
      @close-modal="toggleModal"
      @create-employee="addNewEmployee"
    ></modal>

    <div class="center">
      <div>
        <user-buttons
          @add-employee="toggleModal"
          @sort="sortEmployees"
          @search-name="searchEmployeeBtName"
        ></user-buttons>
        <employee-table
          :entries="tableEntries"
          @remove-employee="removeEmployee"
        ></employee-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAllEmployees,
  addEmployee,
  removeEmployeeFromDb,
  sortByName,
  searchByName,
} from "./scripts/connection.js";

import EmployeeTable from "./components/EmployeeTable.vue";
import UserButtons from "./components/UseButtons.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { EmployeeTable, UserButtons, Modal },

  data() {
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
      const createEmployee = () => {
        addEmployee(employee).then((response) => {
          employee["id"] = response.data;
          this.tableEntries.push(employee);
        });
      };

      var imageReader = new FileReader();
      imageReader.addEventListener("load", () => {
        var profilePic = imageReader.result;
        employee.profileImage = profilePic;

        createEmployee();
      });

      if (employee.profileImage == null) {
        employee.profileImage = "undefined";

        createEmployee();
      } else {
        imageReader.readAsDataURL(employee.profileImage);
      }
    },

    removeEmployee(id) {
      removeEmployeeFromDb(id).then(() => {
        this.tableEntries = this.tableEntries.filter(
          (element) => element.id !== id
        );
      });
    },

    sortEmployees() {
      sortByName().then((response) => {
        this.tableEntries = response.data;
      });
    },

    searchEmployeeBtName(name) {
      if (name !== "") {
        searchByName(name).then((response) => {
          this.tableEntries = response.data;
        });
      }
    },
  },

  mounted() {
    getAllEmployees().then((response) => {
      this.tableEntries = response.data;
    });
  }
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
