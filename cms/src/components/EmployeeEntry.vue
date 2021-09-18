<template>
    <tr>
        <td>{{ profileImage }}</td>
        <td>{{ name }}</td>
        <td>{{ surname }}</td>
        <td>{{ email }}</td>
        <td>{{ gender }}</td>
        <td>{{ birthdate }}</td>
        <td><button class="btn-newentry">Remove</button></td>
    </tr>
</template>

<script>
export default {
    props: ['profileImage', 'name', 'surname', 'email', 'gender', 'birthdate']
}
</script>

<style>
.btn-newentry{
  margin-bottom: 2%;

  color: rgb(46, 43, 43);
  background-color: #CEE5D0;
  border-radius: 4px;
  text-align: center;
  padding: 9px 15px;
  font-size: 14px;
  border: 1px;
  cursor: pointer;
}
</style>
