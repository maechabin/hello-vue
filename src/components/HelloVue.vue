<template>
  <div>
    <h1>Hello {{ value }}</h1>
    <input type="text" v-bind:value="inputValue" v-on:input="handleInput($event)" />
    <button v-on:click="handleClick()" v-bind:disabled="isDisabled">button</button>
  </div>
</template>

<script>
export default {
  name: 'hello-vue',
  props: ['val'],
  data() {
    return {
      value: this.val,
      inputValue: '',
    };
  },
  mounted() {
    console.log('mounted');
  },
  computed: {
    isDisabled() {
      return this.inputValue === '';
    },
  },
  methods: {
    handleInput($event) {
      this.inputValue = $event.target.value;
    },
    handleClick() {
      if (this.inputValue === '') {
        return;
      }
      this.value = this.inputValue;
      this.inputValue = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
