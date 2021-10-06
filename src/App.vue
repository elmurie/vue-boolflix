<template>
  <div id="app">
    <Header @search="itemSearched"/>
    <Films :passedInput="updateSearch"/>
    <Series :passedInput="updateSearch"/>
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
