<template>
  <div id="app">
    <Header @search="itemSearched"/>
    <main>
      <h1 class="searchCoA" v-if="updateSearch == ''">SEARCH A MOVIE OR TV SERIES</h1>
      <Films :passedInput="updateSearch"/>
      <Series :passedInput="updateSearch"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Films from './components/Films.vue'
import Series from './components/Series.vue'

export default {
  name: 'App',
  components: {
    Header,
    Films,
    Series
  },
  data() {
    return {
      updateSearch : '',
      bodyBgImage: require('./assets/img/pattern.png')
    }
  },
  methods : {
    itemSearched(item) {
      this.updateSearch = item;
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/common';
  body {
    background: hsla(0, 0%, 0%, 0.952);
    background-image: url('./assets/img/pattern.png');
    background-position: center;
    background-size: 10%;
    background-blend-mode: multiply;

    main {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .searchCoA {
        align-self: center;
        margin-top: 10%;
        animation: blinker 3s ease-in-out infinite;
      }
      @keyframes blinker {
        50% {
          opacity : .25;
        }
      }
    }
  }


</style>
