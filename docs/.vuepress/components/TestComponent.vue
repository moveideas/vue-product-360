<template>
    <VueProductCarousel :reverse="true" :images="images"></VueProductCarousel>
</template>

<script>

import VueProductCarousel from '../../../dist/VueProductCarousel.umd';

export default {
    props: {
        
    },
    data: function(){
        return {
            images: []
        }
    },
    beforeMount: function(){
        for (let index = 1; index <= 25; index++) {
            this.images.push(`${index}.png`);
        }
    },
    components: {
        VueProductCarousel
    }
}
</script>