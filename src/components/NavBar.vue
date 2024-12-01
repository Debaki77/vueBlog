<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
  <!-- {{ isLoggedIn }} -->
      <b-navbar-nav class="nav-links">
        <b-dropdown-item  to="/">AllPlaces</b-dropdown-item>
        <b-dropdown-item v-if="isLoggedIn" to="/add-place">AddPlace</b-dropdown-item>
        <b-dropdown-item v-if="isLoggedIn" to="/place-detail">Place detail</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" to="/user/:id">UserPlace</b-dropdown-item>
        <b-dropdown-item v-if="!isLoggedIn" to="/register">Signup</b-dropdown-item>
        <b-dropdown-item v-if="!isLoggedIn" to="/login">Login</b-dropdown-item>
        <b-dropdown-item v-if="isLoggedIn" @click="onClick" >Logout</b-dropdown-item>
      </b-navbar-nav>
    </b-navbar>
  </template>
<script>
export default{
    name:"NavBar",
    computed:
{
    isLoggedIn(){
return this.$store.getters.isLoggedIn

    }
    
} ,
 methods:{
    onClick(){
        this.$store.commit("clearUserData") //data clr garchha
        this.$router.push("/login")
    }
 }
}
</script>
<style scoped>
.nav-links {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    gap: 10px;
    color: white;
  }
</style>