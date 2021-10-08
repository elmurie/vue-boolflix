<template>
  <div id="app">

    <!-- listens to v-model input from header.vue   -->
    <Header @search="itemSearched"/>
    <main>
      <!-- text displayed on initial page load or if search is resetted, hidden when proper input is entered  -->
      <h1 class="searchCoA" v-if="updateSearch == ''">SEARCH FOR A MOVIE OR TV SERIES</h1>
      
      <!--prop (v-model input value) passed onto Movies and Series-->
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
    // v-model input transformed into prop to be passed onto movies and Series
    itemSearched(item) {
      this.updateSearch = item;
    }
  },
  created(){
    // Changes page title
    document.title = "Boolflix"
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
      padding: 1% 3% 3% 3%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .searchCoA {
        font-size: $titleSectionFont;
        align-self: center;
        margin-top: 10%;
        animation: blinker 3s ease-in-out infinite;
      }
      @keyframes blinker {
        50% {
          opacity : .25;
          -webkit-text-shadow: 0px 0px 15px 10px #FFFFFF; 
          text-shadow: 0px 0px 15px 10px #FFFFFF;
        }
      }
    }
  }


</style>
