<template>
    <section class="movies">
        <h3>MOVIES</h3>
        <ul>
            <li v-for="(movie, movieIndex) in movies" :key='movieIndex'>
                <Card :api="movie"/>
            </li>
        </ul>
    </section>
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
    .movies  {
        margin: 0 auto;
        padding-top: 5rem;
        
        & > ul { 
            display: flex;
            flex-wrap: wrap;
        }
        
        li {
            width: 20%;
            display: flex;
        }
    }

</style>