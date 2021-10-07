<template>
    <section class="tv-series">
        <h1 v-if="noTVFound == true">NO TV SERIES FOUND</h1>
        <h3 v-if="TVSeries != 0">TV SERIES</h3>
        <ul>
            <li v-for="(TV, TVindex) in TVSeries" :key='TVindex'>
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
        passedInput() {
            this.noTVFound = false;
            if ( this.passedInput == '') {
                    this.TVSeries = [];
            } else {
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        query : this.passedInput,
                        language : 'it-IT'
                    }
                })
                .then( (response) => {
                    this.TVSeries = response.data.results;
                    if ( this.TVSeries.length <= 0) {
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