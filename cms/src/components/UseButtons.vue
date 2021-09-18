<template>
    <div >
        <button class="btn-newentry" id="openModal">New entry</button>
        <button class="btn-newentry" id="sortEntriesByName">Sort by Name</button>

        
        <input type="search" id="searchBar" class="input-textfield" placeholder="Name" >
        <button class="btn-newentry btn-search"  id="searchByName">Search</button>
    </div>
</template>

<script>
export default ({
    
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