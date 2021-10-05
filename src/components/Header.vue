<template>
    <form>
        <input type="text" placeholder="Search" v-model="searchInput">
        <button type="submit" @click.prevent="$emit('search', searchInput)">Search</button>
        <button @click.prevent="resetSearch()">Reset</button>
    </form>
</template>

<script>
export default {
    name : "Header",
    data() {
        return {
            searchInput : ''
        }
    },
    methods : {
        resetSearch() {
            this.searchText = '';
            this.$emit('search', this.searchText);
        }
    }

}
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        justify-content: center;
        padding: 3rem;

        button {
            margin: 0 .5em;
        }
    }


</style>