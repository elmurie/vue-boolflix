<template>
    <section class="movies">
        <h1 v-if="noMovieFound == true">NO MOVIES FOUND</h1>
        <h3 v-if="movies != 0">MOVIES</h3>
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
            movies: [],
            noMovieFound : false
        }
    },
    watch : {
        passedInput() {
            if ( this.passedInput == '') {
                    this.movies = [];
                    this.noMovieFound = false;
            } else {
                this.noMovieFound = false;
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                .then( (response) => {
                    this.movies = response.data.results;
                    if ( this.movies.length <= 0) {
                        this.noMovieFound = true;
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .movies  {
        width: 100%;
        padding-top: 5rem;
        
        h1 {
            text-align: center;
        }

        & > ul { 
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        
        li {
            width: 20%;
            display: flex;
        }
    }

</style>