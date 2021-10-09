<template>
    <section class="tv-series container-fluid">
        <!-- displayed only if search returns no results -->
        <h1 v-if="noTVFound == true">NO TV SERIES FOUND</h1>

        <!-- Trending TV series displayed only if search returns at least 1 result -->
        <h3 v-if="trendingTV != 0">TRENDING TV SERIES</h3>
        <ul class="row row-cols-xxl-5 container mx-auto">
            <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="(TV, TVindex) in trendingTV" :key='TVindex'>
                <!-- passes api props onto Card component -->
                <Card :api="TV"/>
            </li>
        </ul>

        <!-- Searched TV series displayed only if search returns at least 1 result -->
        <h3 v-if="TVSeries != 0">TV SERIES</h3>
        <ul class="row row-cols-xxl-5 container mx-auto">
            <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="(TV, TVindex) in TVSeries" :key='TVindex'>
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
            trendingTV: [],
            noTVFound : false
        }
    },
    created(){
        // Api call for initial display of trending TV series
        axios
            .get("https://api.themoviedb.org/3/trending/tv/week",{
                params:{
                    api_key: '72cd08f1aa2d4c12d81158ac764c8449'
                }
            }
            )
            .then(
                (response)=>{
                        this.trendingTV = response.data.results;
                    }
            )
    },
    watch : {
        // listen to changes to prop received (user search value) 
        passedInput() {
            // avoiding "NO TV SERIES FOUND" message and trending series to be displayed before API call
            this.noTVFound = false;
            this.trendingTV = [];
            // if search string is '' or reset button is clicked,  series array is emptied and trending tvs series are shown
            if ( this.passedInput == '') {
                    this.TVSeries = [];
                    axios
                    .get("https://api.themoviedb.org/3/trending/tv/week",{
                        params:{
                            api_key: '72cd08f1aa2d4c12d81158ac764c8449'
                        }
                    }
                    )
                    .then(
                        (response)=>{
                                this.trendingTV = response.data.results;
                            }
                    )
            } else {
                // API call for TV series based on user search input
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                // array is populated with TV series objects, if 0 "NO TV SERIES FOUND" message is displayed
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
    }

</style>