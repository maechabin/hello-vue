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
   * mountedはコンポーネントがマウントされる直前に呼び出される
   */
  mounted() {
    console.log('mounted');
  },

  /**
   * いわゆるGet/Setアクセサを定義
   */
  computed: {
    /** ボタンが押せるかどうか取得する */
    isDisabled() {
      return this.inputValue === '';
    },
  },

  /**
   * コンポーネント内で使用するメソッドを定義
   */
  methods: {
    /** テキストが入力された時に呼び出される */
    handleInput($event) {
      this.inputValue = $event.target.value;
    },
    /** ボタンがクリックされた時に呼び出される */
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

  /*
   * dataの更新を監視し、変更時に呼び出されるメソッドを定義
   */
  watch: {
    /**
     * data.valueの値が変更される度に呼び出される
     * 引数に、変更後と変更前の値が渡される
     */
    value(newValue, oldValue) {
      console.log(`watch: ${newValue}, ${oldValue}`);
    },
  },

  /**
   * テンプレートの出力の際に任意のフォーマットに変換するためのメソッド
   */
  filters: {
    /** 渡された値をアッパーケースに変換する */
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
