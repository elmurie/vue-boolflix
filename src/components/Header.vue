<template>
    <header class="wrapper" :style="`background-image: url(${bgImg})`">
        <div class="logo">
            <img :src="BXLogo" alt="">
        </div>
        <form>
            <input type="text" placeholder="Search" v-model="searchInput">
            <button type="submit" @click.prevent="$emit('search', searchInput), searchInput = '' ">Search</button>
            <button @click.prevent="resetSearch()">Reset</button>
        </form>
    </header>
</template>

<script>
export default {
    name : "Header",
    data() {
        return {
            searchInput : '',
            bgImg : require('../assets/img/bgImg_Header.jpg'),
            BXLogo : require('../assets/img/boolflix_logo.png')
        }
    },
    methods : {
        resetSearch() {
            this.searchInput = '';
            this.$emit('search', this.searchInput);
        }
    }

}
</script>

<style lang="scss" scoped>
    .wrapper {
        background: hsla(0, 0%, 0%, 0.589);
        background-blend-mode: multiply;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .625rem;
        overflow-y: hidden;
        position: fixed;
        z-index: 2;
        width: 100%;
        box-shadow: inset 0px -15px 20px -7px #000000;

        .logo {
            max-width: 10%;
            min-width: 5%;

            & img {
                width: 100%;
                -webkit-filter: drop-shadow(5px 5px 5px #222);
                filter: drop-shadow(5px 5px 5px #222);
            }
        }


        form {
            display: flex;
            justify-content: center;
            
    
            button {
                margin-left: 1em;
            }
        }
    }


</style>