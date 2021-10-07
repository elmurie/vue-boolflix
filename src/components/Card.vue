<template>
    <div class="card">
        <!-- Card poster is shown, if value is not null -->
        <img v-if="api.poster_path != null" class="poster" :src="`https://image.tmdb.org/t/p/w342/${api.poster_path}`">

        <!-- If value is null, placeholder image is shown  -->
        <div v-else class="placeholder">
            <img class="placeholder-img" :src="placeholderImg" alt="">
            <h3>{{api.title || api.name}}</h3>
        </div>

        <!-- Text on hover -->
        <ul class="data">
            <li><strong>Title:</strong>{{api.title || api.name}}</li>

            <li><strong>Original Title: </strong>{{api.original_title || api.original_name}}</li>

            <!-- Flag method checks if the language is supported and returns either the correspondant flag or a default one  -->
            <li class="lang"><strong>Original Language:</strong><img class="flag" :src="flag(api.original_language)"></li>

            <li class="stars"> <strong>Rating:</strong>
                <!-- Returns filled in stars -->
                <div class="fill" v-for="( star , fillIndex ) in starQuantity()" :key="fillIndex">
                    <font-awesome-icon icon="star" />
                </div>
                <!-- Returns empty stars -->
                <div class="empty" v-for="( star , emptyIndex ) in ( 5 - starQuantity() )" :key="`avoidDuplicateIndex` +  emptyIndex">
                    <font-awesome-icon :icon="['far', 'star']" />
                </div>
            </li>

            <li><strong>Overview:</strong><p>{{api.overview}}</p></li>

        </ul>
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name : "Card",
    props : {
        api : Object
    },
    components : {
        // FontAwesomeIcon
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
        background-color: $bgColor;
        margin: 1rem .1em;
        position: relative;
        display: flex;

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

        .poster {
            width: 100%;
            object-fit: cover;
        }

        &:hover .poster{
            opacity: .2;
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
            transition: .5s;
            font-size: $cardFont;

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
                    display: -webkit-box;
                    -webkit-line-clamp: var(--line-clamp, 8);
                    -webkit-box-orient: vertical;
                    word-break: var(--word-break, 'none');
                    overflow: hidden;
                }
            }

            .lang,
            .stars {
                display: flex;
                align-items: center;
            }

            .empty,
            .fill {
                color: $gold;
                display: flex;
            }
        }
    }


</style>