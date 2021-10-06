<template>
    <ul>
        <li v-for="(movie, index) in movies" :key='index'>
            <Card :api="movie"/>
        </li>
    </ul>
</template>

<script>
import Card from './Card.vue';
import axios from 'axios';

export default {
    name : "Films",
    props : {
        passedInput : String
    },
    components : {
        Card
    },
    data() {
        return {
            movies: []
        }
    },
    watch : {
        passedInput() {
            if ( this.passedInput == '') {
                    this.movies = [];
            } else {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                .then( (response) => {
                    this.movies = response.data.results;
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    ul  {
        padding: .625rem;

        li {
            display: flex;
        }
    }

</style>