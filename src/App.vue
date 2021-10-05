<template>
  <div id="app">
    <Header @search="itemSearched"/>
    <Films :passedInput="updateSearch">
      <FilmCard/>
    </Films>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Films from './components/Films.vue'
import FilmCard from './components/FilmCard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Films,
    FilmCard
  },
  data() {
    return {
      updateSearch : ''
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

</style>
