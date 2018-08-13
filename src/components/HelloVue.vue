<template>
  <div>
    <h1>Hello {{ value | convertUpperCase }}</h1>
    <input type="text" v-bind:value="inputValue" v-on:input="handleInput($event)" />
    <button v-on:click="handleClick()" v-bind:disabled="isDisabled">button</button>
  </div>
</template>

<script>
export default {
  /** コンポーネント名 */
  name: 'hello-vue',

  /** 親コンポーネントから受け取るデータ */
  props: ['val'],

  /** コンポーネントに属するデータ（状態） */
  data() {
    return {
      value: this.val,
      inputValue: '',
    };
  },

  /**
   * lifycycle hooks
   * mountedはコンポーネントがマウントされる直前に呼ばれる
   * */
  mounted() {
    console.log('mounted');
  },

  /** いわゆるGet/Setアクセサ */
  computed: {
    isDisabled() {
      return this.inputValue === '';
    },
  },

  /** コンポーネント内で使用するメソッド */
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

      /** カスタムイベントのemit */
      this.$emit('handle-click', this.value);
    },
  },

  /** dataの更新を監視し、変更時に呼ばれるメソッド */
  watch: {
    value(newValue, oldValue) {
      console.log(`watch: ${newValue}, ${oldValue}`);
    },
  },

  /** テンプレートの出力の際に任意のフォーマットに変換するためのメソッド */
  filters: {
    convertUpperCase(value) {
      if (!value) return;
      return value.toUpperCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
