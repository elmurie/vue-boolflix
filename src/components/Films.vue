<template>
    <section class="movies container-fluid">
        <!-- displayed only if search returns no results -->
        <h1 v-if="noMovieFound == true">NO MOVIES FOUND</h1>

        <!-- displayed only if search returns at least 1 result -->
        <h3 v-if="movies != 0">MOVIES</h3>
        <ul class="row row-cols-xxl-5 container mx-auto">
            <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="(movie, movieIndex) in movies" :key='movieIndex'>
                <!-- passes api props onto Card component -->
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
        // prop received from App.vue
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
    created(){
        // Api call for initial display
        axios
            .get("https://api.themoviedb.org/3/trending/movie/week",{
                params:{
                    api_key: '72cd08f1aa2d4c12d81158ac764c8449'
                }
            }
            )
            .then(
                (response)=>{
                        this.movies = response.data.results;
                    }
            )
    },
    watch : {
        // listen to changes to prop received (user search value) 
        passedInput() {
            // avoiding "NO MOVIES FOUND" message to be displayed before API call
            this.noMovieFound = false;

            // if search string is '' or reset button is clicked, array is emptied
            if ( this.passedInput == '') {
                    this.movies = [];
            } else {
                // API call for movies
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                // array is populated with movie objects, if 0 "NO MOVIE FOUND" message is displayed
                .then( (response) => {
                    this.movies = response.data.results;
                    if ( this.movies.length == 0) {
                        this.noMovieFound = true;
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    .movies  {
        width: 100%;
        padding-top: 5rem;
        
        h1 {
            text-align: center;
        }

        h3 {
            font-size: $titleSectionFont;
        }
        
    }

</style>