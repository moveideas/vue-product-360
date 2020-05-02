<template>
  <div>
    <vue-product-carousel class="tet" :infinite="false" :images="images"></vue-product-carousel>
  </div>
</template>

<script>

import VueProductCarousel from './components/vue-product-carousel.vue';

export default {
  data: () => ({
    images: [
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0000.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0001.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0002.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0003.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0004.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0005.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0006.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0007.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0008.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0009.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0010.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0011.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0012.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0013.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0014.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0015.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0016.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0017.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0018.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0019.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0020.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0021.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0022.png',
      'http://portail.canadianoptical.local/documents/divisions/silhouette/products/1592/carousel/3030/1592-3030-0023.png',
    ],
  }),
  components: {
    VueProductCarousel,
  },
};
</script>
