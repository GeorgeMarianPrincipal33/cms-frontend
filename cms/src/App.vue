<template>
  <div class="center">
    <employee-table :entries="tableEntries"></employee-table>
  </div>
</template>

<script>
import EmployeeTable from './components/EmployeeTable.vue'

export default {
  name: 'App',
  components: { EmployeeTable },

  data() {
    return {
      tableEntries: [
        {
          id: 1,
          name: "testr54353",
          surname: "surtest",
          email: "test@email.com",
          gender: 1,
          birthdate: "2021-10-10"
        }, 
        {
          id: 2,
          name: "test1",
          surname: "surtest1",
          email: "tes1t@email.com",
          gender: 0,
          birthdate: "2021-9-9"
        }, 
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
