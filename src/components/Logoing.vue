<template>
  <div id="logoing">
   <form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="firstname" class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="firstname" placeholder="Email" v-model="email">
    </div>
  </div>
  <div class="form-group">
    <label for="lastname" class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="lastname" placeholder="请输入密码" v-model="password">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default" v-on:click.prevent='onSubmit'>登录</button>
    </div>
  </div>
</form>
  </div>
</template>

<script>
export default {
  name: 'logoing',
  data () {
    return {
      email:'',
      password:''
     
    }
  },
  methods:{
    onSubmit(){
        this.$http.get('https://wd5968247625zgpnbs.wilddogio.com/post.json')
        .then(resp=>{
          console.log(resp.body)
          const obj=resp.body;
          const users=[];
          for(let key in obj){
            const user=obj[key];
            users.push(user);
          }
          const arr=users.filter((user)=>{
            return user.email===this.email&&user.password===this.password
          })
          // 如果两次用户名和密码不正确，arr=[],判断数组的长度
          if(arr!=null&&arr.length>0){
            this.$router.push({path:'/'})
          }else{
            alert('用户名和密码不正确')
          }
        })
 

    }
  }
}
</script>

<style>
</style>