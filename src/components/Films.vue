<template>
    <ul>
        <li v-for="(movie, index) in movies" :key='index'>
            <FilmCard :api="movie"/>
        </li>
    </ul>
</template>

<script>
import FilmCard from './FilmCard.vue';
import axios from 'axios';

export default {
    name : "Films",
    props : {
        passedInput : String
    },
    components : {
        FilmCard
    },
    data() {
        return {
            movies: []
        }
    },
    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=72cd08f1aa2d4c12d81158ac764c8449&query=ritorno+al+futuro')
        .then( (response) => {
            this.movies = response.data.results;
        }
        );
    }
}
</script>

<style lang="scss" scoped>

</style>