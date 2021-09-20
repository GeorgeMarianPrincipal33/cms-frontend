<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="$emit('close-modal')">&times;</span>

      <form class="modal-form" @submit.prevent="submitData">
        <div>
          <input
            type="text"
            name="new-name"
            placeholder="Name"
            v-model="employeeName"
          />
        </div>

        <div>
          <input
            type="text"
            name="new-surname"
            placeholder="Surname"
            v-model="employeeSurname"
          />
        </div>

        <div>
          <input
            type="text"
            name="new-email"
            placeholder="Email"
            v-model="employeeEmail"
          />
        </div>

        <div>
          <select name="new-gender" v-model="employeeGender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <input type="date" name="new-birthdate" v-model="employeeBirthdate" />
        </div>

        <div>
          <input type="file" v-on:change="getFile" />
        </div>

        <div>
          <button class="btn-newentry">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-modal", "create-employee"],

  data() {
    return {
      employeeName: "",
      employeeSurname: "",
      employeeEmail: "",
      employeeGender: "Male",
      employeeBirthdate: "",
      employeeProfileImage: null,
    };
  },

  methods: {
    getFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.employeeProfileImage = files[0];
    },

    submitData() {
      const employee = {
        name: this.employeeName,
        surname: this.employeeSurname,
        email: this.employeeEmail,
        gender: (this.employeeGender === 'Male') ? 0 : 1,
        birthdate: this.employeeBirthdate,
        profileImage: this.employeeProfileImage,
      };

      if (this.validateData(employee) == true) {
        this.$emit("create-employee", employee);
        this.$emit("close-modal");
      }
    },

    validateData(employee) {
      var errorMessage = "";
      if (employee.name === "") {
        errorMessage += "No name was provided!\n";
      }

      if (employee.surname === "") {
        errorMessage += "No surname was provided!\n";
      }

      if (this.validateEmail(employee.email) == false) {
        errorMessage += "Invalid email format!\n";
      }

      if (this.validateDate(employee.birthdate) == false) {
        errorMessage += "The employee must be at least 16 years old!\n";
      }

      if (errorMessage.length != 0) {
        alert(errorMessage);
        return false;
      }

      return true;
    },

    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(email).toLowerCase());
    },

    validateDate(user_date) {
      if (!user_date) {
        return false;
      }

      var birthdate = new Date(user_date);
      if (this.calculateAge(birthdate) < 16) return false;

      return true;
    },

    calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },

  },
};
</script>

<style>
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  border-radius: 2rem;
}

.modal-form {
  position: relative;
  top: 20%;
  left: 35%;
  margin: auto;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
