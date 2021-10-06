<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w185/${api.poster_path}`" alt="">
        <ul class="data">
            <li>{{api.title}}{{api.name}}</li>
            <li>{{api.original_title}}{{api.original_name}}</li>
            <li>
                Language:  
                <img :src="flag(api.original_language)">
            </li>
            <li>{{api.vote_average}}</li>
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
        }
    },
    data() {
        return {
            missingLanguages : ['gu', 'ii', 'ik', 'iu', 'jv', 'kg', 'ki', 'kj', 'ml', 'mr', 'nb', 'nd', 'ng', 'nn', 'nr', 'pi', 'ps', 'sa', 'sw', 'te', 'tl', 'tw']
        }
    }
}
</script>

<style lang="scss" scoped>    
    .card {
        background-color: rgba(204, 204, 204, 0.644);
        border: 1px solid red;

        ul {
            display: flex;
            margin-top: 5px;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1em 1em;

                &img {
                    max-width: 2rem;
                    margin-left: .5em;
                }
            }
        }
    }


</style>