<template>
  <div class="center">
    <employee-table></employee-table>
  </div>
</template>

<script>
import EmployeeTable from './components/EmployeeTable.vue'

export default {
  name: 'App',
  data() {
    return {
      tableEntries: [

      ]
    }
  },
  components: {
    EmployeeTable
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
