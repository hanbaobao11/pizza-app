<template>
  <div class="row text-center">
    <div id="home" class="col-sm-12">
      <div class="bg">
        <h1>欢迎大家品尝</h1>
        <p>这里有大家喜欢的Pizaa!</p>

        <button v-on:click="goToMenu" class="btn-lg">Let's go!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToMenu() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#home {
  background: url(../../src/assets/pizza.jpg);
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%；
}
.bg {
  max-width:70vw;
  margin:0 auto;
  background: #eee;
  opacity: 0.6;
  padding:20px;
}
</style>