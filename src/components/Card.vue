<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w185/${api.poster_path}`" alt="">
        <ul class="data">
            <li>{{api.title}}{{api.name}}</li>
            <li>{{api.original_title}}{{api.original_name}}</li>
            <li>
                Language:  
                <img class="flag" :src="flag(api.original_language)">
            </li>
            <li>{{starQuantity()}}</li>
            <div class="stars">
                <div class="fill" v-for="( star , index ) in starQuantity()" :key="index">
                    <i class="fas fa-star"></i>
                </div>
                <div class="empty" v-for="( star , index ) in ( 5 - starQuantity() )" :key="index">
                    <i class="far fa-star"></i>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name : "Card",
    props : {
        api : Object
    },
    methods : {
        flag(isoCode) {
            if ( !this.missingLanguages.includes(isoCode) ) {
                return `https://www.unknown.nu/flags/images/${isoCode}-100`;
            } else {
                return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png";
            }
        },
        starQuantity() {
            return Math.ceil( this.api.vote_average / 2 );
        }
    },
    data() {
        return {
            missingLanguages : ['gu', 'ii', 'ik', 'iu', 'jv', 'kg', 'ki', 'kj', 'ml', 'mr', 'nb', 'nd', 'ng', 'nn', 'nr', 'pi', 'ps', 'sa', 'sw', 'te', 'tl', 'tw'],
        }
    }
}
</script>

<style lang="scss" scoped>    
    .card {
        background-color: rgba(204, 204, 204, 0.644);
        border: 1px solid red;
        margin: 1rem 0;

        ul {
            display: flex;
            margin-top: 5px;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1em 1em;

                .flag {
                    max-width: 2rem;
                    margin-left: .5em;
                }
            }
        }
    }


</style>