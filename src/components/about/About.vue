<template>
  <div class="row mb-5">
     <div class="col-4">
       <!-- 导航 -->
 <ul class="list-group mb-5">
  <router-link class="nav-link" tag='li' to='./history'>
    <a class="list-group-item list-group-item-action">历史订单</a></router-link> 
 
  <router-link class="nav-link" tag='li' to='/about/contact'>
    <a class="list-group-item list-group-item-action">联系我们</a></router-link> 
 
  <router-link class="nav-link" tag='li' to='/orderingGuaid'>
    <a class="list-group-item list-group-item-action">订单管理</a></router-link> 
 
  <router-link class="nav-link" tag='li' to='./delivery'>
    <a class="list-group-item list-group-item-action">快递信息</a></router-link> 
 
</ul>
     </div>
  <div class="col-8">
    <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
     
    }
  }
}
</script>

<style>
</style>