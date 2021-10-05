<template>
    <ul>
        <li>{{api.title}}</li>
        <li>{{api.original_title}}</li>
        <li>
            <img :src="'https://www.countryflags.io/' + flag() + '/flat/64.png'" :alt="'Language: ' + api.original_language.toUpperCase()">
        </li>
        <li>{{api.vote_average}}</li>
    </ul>
</template>

<script>
export default {
    name : "FilmCard",
    props : {
        api : Object,
        flagsArray: {
            englishFlags : ["en", "au",],
            spanishFlags : []
        }
            
        
    },
    methods : {
        flag() {
            if ( this.api.original_language == 'en' ) {
                return 'gb';
            } else if ( this.api.original_language == 'ja' ){
                return 'jp';
            } else {
                return this.api.original_language;
            }
        }
    },
    data() {
        return {
            isLoaded: false
        }
    }
}
</script>

<style lang="scss" scoped>    
    ul {
        display: flex;
        background-color: rgb(206, 206, 206);
        border: 1px solid red;
        margin-top: 5px;

        li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em 1em;
    }
    }


</style>