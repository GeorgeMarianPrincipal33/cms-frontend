<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="$emit('close-modal')">&times;</span>

      <form class="modal-form" @submit.prevent="submitData">
        <div>
          <input type="text" id="new-name" name="new-name" placeholder="Name" v-model="employeeName"/>
        </div>

        <div>
          <input type="text" name="new-surname" placeholder="Surname" v-model="employeeSurname"/>
        </div>

        <div>
          <input type="text" id="new-email" name="new-email"  placeholder="Email" v-model="employeeEmail"/>
        </div>

        <div>
          <select name="new-gender" id="new-gender" v-model="employeeGender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <input type="date" id="new-birthdate" name="new-birthdate" v-model="employeeBirthdate"/>
        </div>

        <div>
          <input id="new-image" type="file" v-on:change="getFile"/>
        </div>

        <div>
          <button class="btn-newentry" id="createNewEntry">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    emits: ['close-modal', 'create-employee'],

    data() {
        return {
            employeeName: '',
            employeeSurname: '',
            employeeEmail: '',
            employeeGender: 'Male',
            employeeBirthdate: '',
            employeeProfileImage: null,
        }
    },

    methods: {
        getFile(e){
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

            this.employeeProfileImage = files[0]
        },

        submitData(){
            this.$emit('create-employee', 
            {
                name: this.employeeName, 
                surname: this.employeeSurname, 
                email: this.employeeEmail,
                gender: this.employeeGender,
                birthdate: this.employeeBirthdate,
                profileImage: this.employeeProfileImage
            })
            this.$emit('close-modal')
        }
    }
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