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
    updated() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params : {
                api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                query : this.passedInput,
                language : 'it-IT'
            }

        }
        )
        .then( (response) => {
            if ( this.passedInput == '') {
                this.movies = [];
            } else {
                this.movies = response.data.results;
            }
        }
        );
    }
}
</script>

<style lang="scss" scoped>

</style>