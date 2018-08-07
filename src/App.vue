<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello-vue val="Vue" v-on:handle-click="handleClickButton($event)" />
  </div>
</template>

<script>
import HelloVue from './components/HelloVue.vue';

export default {
  name: 'app',
  components: {
    HelloVue,
  },
  methods: {
    handleClickButton($event) {
      console.log($event);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
