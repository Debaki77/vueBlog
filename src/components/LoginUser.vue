
<template>
    <div class="container">
        <b-spinner v-if="isLoading" variant="success" type="grow"></b-spinner>
      <b-form v-else @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
  
  
        <b-form-group id="input-group-3" label="Password:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "LoginUser",
    data() {
      return {
        form: {
          email: "",
          password: "",
        },
        isLoading:false
      };
    },
    methods: {
      onSubmit() {
        console.log("hey")
        const url = "http://localhost:90/api/users/login";
        this.isLoading=true
        axios.post(url,this.form).then((response) => {
            console.log(response)
            alert("Login successful!");
            this.$store.commit('setUserData',response.data)
            this.$router.push("/");
          })
          .catch((error) => {
         console.log(error)
            alert(error.response.data.message);
          }).finally(()=>{
            this.isLoading=false
          })
      },
      created(){
        console.log(this.$store)
      }
    },

  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 100vh;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  </style>
  