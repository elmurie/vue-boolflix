<template>
    <div class="card mx-auto">
        <div class="card-img">
            <!-- If value is not null, card poster is shown -->
            <img v-if="api.poster_path != null" class="poster" :src="`https://image.tmdb.org/t/p/w342/${api.poster_path}`">

            <!-- If value is null, placeholder image is shown  -->
            <div v-else class="placeholder">
                <img class="placeholder-img" :src="placeholderImg" alt="">
                <h3>{{api.title || api.name}}</h3>
            </div>
        </div>

        <!-- Text on hover -->
        <ul class="data">
            <li><strong>Title:</strong>{{api.title || api.name}}</li>

            <!-- If title is the same as original title, original title is not shown -->
            <li v-if="api.original_title !== api.title || api.original_name !== api.name"><strong>Original Title: </strong>{{api.original_title || api.original_name}}</li>

            <!-- Flag method checks if the language is supported and returns either the correspondant flag or a default one  -->
            <li class="lang"><strong>Original Language:</strong><img class="flag" :src="flag(api.original_language)"></li>

            <li class="stars"> <strong>Rating:</strong>
                <!-- Returns solid stars -->
                <div class="solid" v-for="( star , fillIndex ) in starQuantity()" :key="fillIndex">
                    <font-awesome-icon icon="star" />
                </div>
                <!-- Returns empty stars -->
                <div class="empty" v-for="( star , emptyIndex ) in ( 5 - starQuantity() )" :key="`avoidDuplicateIndex` +  emptyIndex">
                    <font-awesome-icon :icon="['far', 'star']" />
                </div>
            </li>

            <li><p><strong>Cast:</strong>{{this.castmembers.join(', ')}}</p></li>
            <li><p><strong>Overview:</strong>{{api.overview}}</p></li>

        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : "Card",
    props : {
        api : Object
    },
    mounted() {
        this.cast()
    },
    methods : {
        // If language returned from API is not contained in the missing languages array, the proper flag is shown  
        flag(isoCode) {
            if ( !this.missingLanguages.includes(isoCode) ) {
                return `https://www.unknown.nu/flags/images/${isoCode}-100`;
            } else {
                return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png";
            }
        },
        // Average 0-10 rating is transformed to base 5 rating and rounded up to next integer  
        starQuantity() {
            return Math.ceil( this.api.vote_average / 2 );
        },
        cast() {
            axios.get(`https://api.themoviedb.org/3/movie/${this.api.id}/credits`, {
                    params : {
                        api_key : '72cd08f1aa2d4c12d81158ac764c8449',
                        language : 'it-IT'
                    }
                })
                // array is populated with movie objects, if 0 "NO MOVIE FOUND" message is displayed
                .then( (response) => {
                    for ( let i = 0; i < 5 && i < response.data.cast.length; i++ ) {
                        this.castmembers.push( `${response.data.cast[i].name}`)
                    }
                });
        }
    },
    data() {
        return {
            missingLanguages : ['gu', 'ii', 'ik', 'iu', 'jv', 'kg', 'ki', 'kj', 'ml', 'mr', 'nb', 'nd', 'ng', 'nn', 'nr', 'pi', 'ps', 'sa', 'sw', 'te', 'tl', 'tw'],
            placeholderImg : require('../assets/img/placeholder.png'),
            castmembers : []
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    .card {
        max-width: 14rem;
        height: calc(14rem * 1.5);
        background-color: $bgColor;
        margin: .7rem .1rem;
        position: relative;
        display: flex;
        transition: 1s;

        &:hover {
            cursor: pointer;
        }

        .placeholder {
            width: 100%;
            position: relative;
            text-align: center;
            background-color: $bgColor;
            background-size: 35%;
            background-image: url('../assets/img/pattern.png');
            background-blend-mode: multiply ;

            .placeholder-img {
                width: 100%;
                object-fit: cover;

            }

            & h3 {
                position: absolute;
                width: 90%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-transform: uppercase;
                font-size: $placeholderFont;
                transition: .3s;
            }
        }

        .card-img {
            height: 100% ;
        }

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: rotateY(0deg);
            transition:  1s ease-out;
        }

        &:hover .poster{
            opacity: .2;
            transform: rotateY(180deg);
        }

        &:hover ul {
            opacity: 1;
        }
        &:hover h3 {
            opacity: 0;
        }

        ul {
            opacity: 0;
            height: 100%;
            position: absolute;
            top: 0;
            flex-direction: column;
            padding: .6125rem;
            margin-top: 5px;
            transition: 1s;
            font-size: $cardFont;

            li {
                margin: .5em 0;

                strong {
                    margin-right: .2em;
                }
                .flag {
                    max-width: 1.5rem;
                    margin-left: .5em;
                }
            }

            .lang,
            .stars {
                display: flex;
                align-items: center;
            }

            .empty,
            .solid {
                color: $gold;
                display: flex;
            }
        }
    }


</style>