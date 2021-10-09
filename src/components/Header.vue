<template>
    <header class="wrapper" :style="`background-image: url(${bgImg})`">
        <div class="logo">
            <img :src="BXLogo" alt="">
        </div>
        <form>
            <!-- $emit event sending v-model input and reset to App -->
            <input type="text" placeholder="Search" v-model="searchInput">
            <button type="submit" @click.prevent="$emit('search', searchInput), searchInput = '' ">Search</button>
            <button @click.prevent="resetSearch()">Clear</button>
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
        // when reset button is clicked, it emits '' to App
        resetSearch() {
            this.searchInput = '';
            this.$emit('search', this.searchInput);
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

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
            width: 10%;

            & img {
                width: 100%;
                -webkit-filter: drop-shadow(5px 5px 2px #222);
                filter: drop-shadow(5px 5px 2px #222);
            }
        }


        form {
            display: flex;
            justify-content: center;
            
            input {
                padding-left: .5em;
            }

            button {
                margin-left: 1em;
            }
        }
    }


</style>