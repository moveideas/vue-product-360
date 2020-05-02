<template>
  <div class="vue-product-carousel">
    <vue-product-carousel :infinite="false" :images="images"></vue-product-carousel>
  </div>
</template>

<script>

import VueProductCarousel from './components/vue-product-carousel.vue';

export default {
  data: () => ({
    images: [],
  }),
  beforeMount() {
    for (let index = 1; index <= 25; index += 1) {
      this.images.push(`${index}.png`);
    }
  },
  components: {
    VueProductCarousel,
  },
};
</script>
