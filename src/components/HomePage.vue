<template>
      <div class="user-container">
   
 <div v-for="user in users" :key="user.id">
    <!-- dynamic img and id ko laagi v-bind -->
  <b-card 
    :img-src="user.image"  
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-card-text>
<p>name:{{ user.name}}</p>
    </b-card-text>

    <b-card-text>
<p>Email:{{ user.email }}</p>
    </b-card-text>
    <b-card-text>
<h1>places:{{ user.places.length }}{{ user.places.length>1 ? "places":"place"}}</h1>
    </b-card-text>


    <b-button :to="`/user/${user.id}`" variant="primary">View more</b-button>
  </b-card>
</div>
</div>

</template>
<script>
import axios from 'axios';


export default{
    name:"HomePage",
    data(){
        return{
            users:[{
                id:"u1",
                name:"Srilanka",
                email:"a@gmail.com",
                image:"https://th.bing.com/th/id/OIP.9Btsq-0G2lv7CNuVa9CWfwHaEK?w=1600&h=900&rs=1&pid=ImgDetMain",
                places:["u1",'u2']
            },
            {
                id:"u2",
                name:"pakisthan",
                email:"p@gmail.com",
                image:"https://th.bing.com/th/id/OIP.9Btsq-0G2lv7CNuVa9CWfwHaEK?w=1600&h=900&rs=1&pid=ImgDetMain",
                places:["u3",'u4']
            }]
            // isLoading:false
        }

    },
    methods:{
  getUserData(){
    let url="http://localhost:90/api/users"
    axios.get(url).then((response)=>{
        console.log(response)
        this.users=response.data.users
        this.users.forEach((item)=>{
            if(!item.image)
            item.image="https://th.bing.com/th/id/OIP.9Btsq-0G2lv7CNuVa9CWfwHaEK?w=1600&h=900&rs=1&pid=ImgDetMain"
        })
        
    }).catch((err)=>{
        console.log(err)
    })
  }
    },
    created(){
        this.getUserData()
        console.log(this.$store)
    }
}
</script>
<style scoped>
.user-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.user-card {
  max-width: 300px;
}

.user-name {
  font-size: 1.5rem;
  color: #343a40;
}

.add-place-btn {
  width: 100%;
}
</style>
