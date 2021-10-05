<template>
    <ul>
        <li>Title : {{api.title}}</li>
        <li>Original title : {{api.original_title}}</li>
        <li>Language : {{api.original_language}}
            <img :src="'https://www.countryflags.io/' + flag() + '/flat/64.png'" :alt="api.original_language">
        </li>
        <li>Average rating : {{api.vote_average}}</li>
    </ul>
</template>

<script>
export default {
    name : "FilmCard",
    props : {
        api : Object,

    },
    methods : {
        flag() {
            if (this.api.original_language == 'en') {
                return 'gb';
            } else {
                return this.api.original_language;
            }
        }
    },
    data() {
        return {
            bandiera : 'gb'
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        li {
            border: .0625rem solid grey;
            margin: 1em 1em;
        }
    }

</style>