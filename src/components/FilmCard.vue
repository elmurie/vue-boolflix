<template>
    <ul>
        <li>Title : {{api.title}}</li>
        <li>Original title : {{api.original_title}}</li>
        <li>Language : {{api.original_language}}</li>
        <li>Average rating : {{api.vote_average}}</li>
    </ul>
</template>

<script>
export default {
    name : "FilmCard",
    props : {
        api : Object
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