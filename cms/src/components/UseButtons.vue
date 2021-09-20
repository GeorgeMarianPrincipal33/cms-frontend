<template>
    <div >
        <button @click="$emit('add-employee')" class="btn-newentry">New entry</button>
        <button @click="$emit('sort')" class="btn-newentry">Sort by Name</button>

        
        <input type="search" class="input-textfield" placeholder="Name" v-model="name">
        <button @click="$emit('search-name', name)" class="btn-newentry btn-search">Search</button>
    </div>
</template>

<script>
export default ({
    emits: ['add-employee', 'sort', 'search-name'],

    data(){
      return {
        name: ''
      }
    }
})

</script>

<style >

.input-textfield{
  float: right;
  margin-bottom: 2%;
  margin-left: 15%;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 8px;
}

.btn-search {
  float: right;
}

input, select {
  position: relative;
  left: -10%;
  padding: 11px;
  margin-bottom: 15px;
}
</style>