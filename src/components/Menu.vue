<template>
  <div id="menuApp">
   <ul>
     <li v-for='list in lists'>
       <h3>{{list.name}}</h3>
       <img :src="list.image" alt="">
       
      
     </li>
   </ul>

 
</div>
  
 
</template>

<script>
export default{
  name:'menuApp',
    data(){
      return{
          lists:[]
      }
  },
  created(){
    this.$http.get('http://localhost:3000/menu')
    .then((data)=>{
      console.log(data)
      this.lists=data.body;
    })
   
  }
}

</script>
<style>





</style>