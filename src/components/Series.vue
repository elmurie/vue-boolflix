<template>
    <ul>
        <li v-for="(TV, index) in movies" :key='index'>
            <Card :api="TV"/>
        </li>
    </ul>
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
            TVSeries: []
        }
    },
    watch : {
        passedInput() {
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
                    if ( this.passedInput == '') {
                        this.TVSeries = [];
                    } else {
                        this.TVSeries = response.data.results;
                    }
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