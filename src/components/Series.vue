<template>
    <section class="tv-series">
        <!-- displayed only if search returns no results -->
        <h1 v-if="noTVFound == true">NO TV SERIES FOUND</h1>

        <!-- displayed only if search returns at least 1 result -->
        <h3 v-if="TVSeries != 0">TV SERIES</h3>
        <ul>
            <li v-for="(TV, TVindex) in TVSeries" :key='TVindex'>
                <!-- passes api props onto Card component -->
                <Card :api="TV"/>
            </li>
        </ul>
    </section>
</template>

<script>
import Card from './Card.vue';
import axios from 'axios';

export default {
    name : "Series",
    props : {
        // prop received from App.vue
        passedInput : String
    },
    components : {
        Card
    },
    data() {
        return {
            TVSeries: [],
            noTVFound : false
        }
    },
    watch : {
        // listen to changes to prop received (user search value) 
        passedInput() {
            // avoiding "NO TV SERIES FOUND" message to be displayed before API call
            this.noTVFound = false;

            // if search string is '' or reset button is clicked, array is emptied
            if ( this.passedInput == '') {
                    this.TVSeries = [];
            } else {
                // API call for movies
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                // array is populated with movie objects, if 0 "NO TV SERIES FOUND" message is displayed
                .then( (response) => {
                    this.TVSeries = response.data.results;
                    if ( this.TVSeries.length == 0) {
                        this.noTVFound = true;
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    .tv-series  {
        width: 100%;
        padding-top: 1rem;

        h1 {
            text-align: center;
        }

        h3 {
            font-size: $titleSectionFont;
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