<template>
    <div class="card">
        <img v-if="api.poster_path != null" class="poster" :src="`https://image.tmdb.org/t/p/w342/${api.poster_path}`" alt="">
        <div v-else class="placeholder">
            <!-- <img class="placeholder-img" :src="placeholderImg"> -->
            <h3>{{api.title || api.name}}</h3>
        </div>
        <ul class="data">
            <li><strong>Title:</strong>{{api.title || api.name}}</li>
            <li><strong>Original Title: </strong>{{api.original_title || api.original_name}}</li>
            <li class="lang"><strong>Original Language:</strong><img class="flag" :src="flag(api.original_language)"></li>
            <li class="stars"> <strong>Rating:</strong>
                <div class="fill" v-for="( star , index ) in starQuantity()" :key="index">
                    <i class="fas fa-star"></i>
                </div>
                <div class="empty" v-for="( star , index ) in ( 5 - starQuantity() )" :key="index">
                    <i class="far fa-star"></i>
                </div>
            </li>
            <li><strong>Overview:</strong><p>{{api.overview}}</p></li>
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
            placeholderImg : require('../assets/img/placeholder.png')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    .card {
        margin: 1rem 0;
        position: relative;

        &:hover {
            cursor: pointer;
        }

        .placeholder {
            width: 342px;
            height: 513px;
            position: relative;
            text-align: center;
            background: rgba(31, 0, 8, 0.89);
            background-size: 35%;
            background-image: url('../assets/img/pattern.png');
            background-blend-mode: multiply ;

            .placeholder-img {
                visibility: hidden;
            }

            & h3 {
                position: absolute;
                width: 90%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-transform: uppercase;
                font-size: 2.5rem;
                transition: .3s;
            }
        }

        & .poster {
            // width: 100%;
        }

        &:hover .poster{
            opacity: .4;
        }

        &:hover ul {
            opacity: 1;
        }
        &:hover h3 {
            opacity: 0;
        }

        ul {
            opacity: 0;
            position: absolute;
            top: 0;
            flex-direction: column;
            padding: .6125rem;
            margin-top: 5px;
            transition: .5s;

            li {
                margin: .5em 0;

                strong {
                    margin-right: .2em;
                }
                .flag {
                    max-width: 2rem;
                    margin-left: .5em;
                }

                p {
                    margin-top: 1em;
                    text-align: justify;
                    font-size: .875rem;
                }
            }

            .lang,
            .stars {
                display: flex;
                align-items: center;
            }

            .stars i{
                    color: $gold;
                    display: flex;
                }
        }
    }


</style>