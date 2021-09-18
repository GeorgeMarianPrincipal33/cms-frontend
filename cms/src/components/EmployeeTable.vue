<template>
  <div class="center">
    <div>
      <table id="entries">
        <thead>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Sex</th>
            <th>Birthday</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
    
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  background-color: #F3F0D7;
}

td, th {
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}

tr:hover{
  background-color: #F7D59C;
}

.profile-img {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>