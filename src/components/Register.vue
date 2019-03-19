<template>
  <div id="register">
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
    <label for="com-name" class="col-sm-2 control-label">确认密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="com-name" placeholder="请输入密码" v-model="comfirmPassword">
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
  name: 'register',
  data () {
    return {
     email:'',
     password:'',
     comfirmPassword:''
    }
  },
  methods:{
    onSubmit(){
      if(this.password==this.comfirmPassword){
        const obj={
          email:this.email,
          password:this.password,
          comfirmPassword:this.comfirmPassword
        }
        this.$http.post('https://wd5968247625zgpnbs.wilddogio.com/post.json',obj)
        .then(res=>{
          this.$router.push({path:'/logoing'})
        })
      }else{
        alert('两次密码输入不一致')
      }

    }
  }
}
</script>

<style>
</style>