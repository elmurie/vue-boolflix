<template>
    <ul>
        <li>{{api.title}}</li>
        <li>{{api.original_title}}</li>
        <li>
            <img :src="flag()">
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
        flag() {
            let language = this.api.original_language;
            switch (language) {
                case 'en' :
                    return 'https://www.countryflags.io/GB/flat/64.png';
                case 'es': 
                    return 'https://www.countryflags.io/ES/flat/64.png';
                case 'fr': 
                    return 'https://www.countryflags.io/FR/flat/64.png';
                case 'pt': 
                    return 'https://www.countryflags.io/PT/flat/64.png';
                case 'ja': 
                    return 'https://www.countryflags.io/JP/flat/64.png';
                case 'de': 
                    return 'https://www.countryflags.io/DE/flat/64.png';
                case 'da': 
                    return 'https://www.countryflags.io/DK/flat/64.png';
                case 'af': 
                    return 'https://www.countryflags.io/ZA/flat/64.png';
                case 'sv': 
                    return 'https://www.countryflags.io/SE/flat/64.png';
                case 'fi': 
                    return 'https://www.countryflags.io/FI/flat/64.png';
                case 'no': 
                    return 'https://www.countryflags.io/NO/flat/64.png';
                case 'ar':
                    return 'https://www.countryflags.io/SA/flat/64.png';
                case 'nl':
                    return 'https://www.countryflags.io/NL/flat/64.png';
                case 'pl':
                    return 'https://www.countryflags.io/PL/flat/64.png';
                case 'ru':
                    return 'https://www.countryflags.io/ru/flat/64.png';
                case 'hi': 
                    return 'https://www.countryflags.io/IN/flat/64.png';
                case 'it': 
                    return 'https://www.countryflags.io/IT/flat/64.png';
                case 'zh': 
                    return 'https://www.countryflags.io/CN/flat/64.png';
                case 'cn': 
                    return 'https://www.countryflags.io/CN/flat/64.png';
                case 'ko': 
                    return 'https://www.countryflags.io/KR/flat/64.png';
                case 'id': 
                    return 'https://www.countryflags.io/ID/flat/64.png';
                case 'tr': 
                    return 'https://www.countryflags.io/TR/flat/64.png';
                case 'hr': 
                    return 'https://www.countryflags.io/HR/flat/64.png';
                case 'ms': 
                    return 'https://www.countryflags.io/MY/flat/64.png';
                case 'sr': 
                    return 'https://www.countryflags.io/RS/flat/64.png';
                case 'th': 
                    return 'https://www.countryflags.io/TH/flat/64.png';
                case 'cs': 
                    return 'https://www.countryflags.io/CZ/flat/64.png';
                case 'hu': 
                    return 'https://www.countryflags.io/HU/flat/64.png';
                default: 
                    return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"
            }
        }
    },
    data() {
        return {
            
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
            max-width: 4rem;
        }
    }
    }


</style>