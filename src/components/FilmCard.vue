<template>
    <ul>
        <li>{{api.title}}</li>
        <li>{{api.original_title}}</li>
        <li>
            Language:  
            <img :src="flag(api.original_language)">
        </li>
        <li>{{api.vote_average}}</li>
    </ul>
</template>

<script>
export default {
    name : "FilmCard",
    props : {
        api : Object
    },
    methods : {
        flag(isoCode) {
            if ( this.languages.includes(isoCode) ) {
                return `https://www.unknown.nu/flags/images/${isoCode}-100`;
            } else {
                return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png";
            }
        }
    },
    data() {
        return {
            languages : ['ab','aa','af','ak','sq','am','ar','an','hy','as','av','ae','ay','az','bm','ba','eu','be','bn','bh','bi','bs','br','bg','my','ca','km','ch','ce','ny','zh','cu','cv','kw','co','cr','hr','cs','da','dv','nl','dz','en','eo','et','ee','fo','fj','fi','fr','ff','gd','gl','lg','ka','de','el','kl','gn','ht','ha','he','hz','hi','ho','hu','is','io','ig','id','ia','ie','ga','it','ja','kn','kr','ks','kk','rw','kv','ko','ku','ky','lo','la','lv','lb','li','lt','lu','mk','mg','ms','mt','gv','mi','mh','ro','mn','na','nv','ne','se','no','oc','oj','or','om','os','pa','fa','pl','pt','qu','rm','rn','ru','sm','sg','sc','sr','sn','sd','si','sk','sl','so','st','es','su','ss','sv','ty','tg','ta','tt','th','bo','ti','to','ts','tn','tr','tk','ug','uk','ur','uz','ve','vi','vo','wa','cy','fy','wo','xh','yi','yo','za','zu']
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

        img {
            max-width: 2rem;
            margin-left: .5em;
        }
    }
    }


</style>