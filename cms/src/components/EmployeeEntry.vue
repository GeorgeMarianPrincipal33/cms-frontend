<template>
  <tr>
    <td><img class="profile-img" v-bind:src="getImage(profileImage)" /></td>
    <td>{{ name }}</td>
    <td>{{ surname }}</td>
    <td>{{ email }}</td>
    <td>{{ formatGender(gender) }}</td>
    <td>{{ formatDate(birthdate) }}</td>
    <td><button class="btn-newentry" @click="$emit('remove-employee', employeeId)">Remove</button></td>
  </tr>
</template>

<script>
export default {
  props: ["employeeId", "name", "surname", "email", "gender", "birthdate", "profileImage"],
  emits: ["remove-employee"],
  methods: {
    getImage(image) {
      if (image === "undefined")
        return require("@/assets/no_profile_image.png");

      return image;
    },

    formatDate(birthdate) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "November",
        "December",
      ];

      const date = new Date(birthdate);

      var year = date.getFullYear();
      var monthIndex = Number(date.getMonth());
      var month = months[monthIndex];
      var day = date.getDate();

      return `${day} ${month} ${year}`;
    },

    formatGender(gender) {
      if (gender == 0) return "Male";

      return "Female";
    },
  },
};
</script>

<style>
.btn-newentry {
  margin-bottom: 2%;
  margin-right: 1%;
  color: rgb(46, 43, 43);
  background-color: #cee5d0;
  border-radius: 4px;
  text-align: center;
  padding: 9px 15px;
  font-size: 14px;
  border: 1px;
  cursor: pointer;
}

.profile-img {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
