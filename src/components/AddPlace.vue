<template>
    <div class="container">
      <b-spinner v-if="isLoading" variant="success" type="grow"></b-spinner>
      <b-form v-else @submit.prevent="onSubmit">
        <h2 class="form-title">Add Place</h2>
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="formData.title"
            type="text"
            placeholder="Title"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formData.description"
            placeholder="Enter description"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-3" label="Address:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="formData.address"
            type="text"
            placeholder="Enter address"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-4" label="Image:" label-for="input-4">
          <b-form-file
            id="input-4"
            v-model="formData.image"
            placeholder="Upload image"
            required
          ></b-form-file>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AddPlace",
    data() {
      return {
        isLoading: false,
        formData: {
          title: "",
          description: "",
          address: "",
          image: null,
        },
      };
    },
    computed: {
      getToken() {
return this.$store.getters.token
      },
    },
    methods: {
      onSubmit() {
        this.isLoading = true;
  
        let token = `Bearer ${this.getToken}`;
        let url = "http://localhost:90/api/places/";
        const formData = new FormData();
        formData.append("title", this.formData.title);
        formData.append("description", this.formData.description);
        formData.append("address", this.formData.address);
        formData.append("image", this.formData.image);
        axios
        .post(url, formData, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response);
          this.formData = {
            title: "",
            description: "",
            address: "",
           image: null,
          };
         
        }).catch((error)=>{
          console.log(error.response.data.message)
          alert(error.response.data.message)
        })
       .finally(()=>{
          this.formData={}
          this.isLoading=false
        });
    },
    onFileChange(event) {
      this.selectedImage = event.target.files[0];
    },
  },
};
  </script>
  