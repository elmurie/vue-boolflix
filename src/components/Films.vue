<template>
    <div>
        <FilmCard/>
    </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
    name : "Films",
    props : {
        passedInput : String
    },
    components : {
        FilmCard
    }
}
</script>

<style lang="scss" scoped>

</style>