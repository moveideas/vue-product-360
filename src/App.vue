<template>
  <div class="container mx-auto p-5">
    <header class="py-20 border-b border-gray-300 text-center">
      <h1 class="text-3xl lg:text-5xl font-bold leading-tigh">A flexible product carousel for Vue.js</h1>
      <p class="leading-relaxed text-2xl lg:text-2xl text-gray-600">
        Loop a series of images in a 360 rotatation carousel with this plugin for Vue.js
      </p>
      <div class="flex mt-6 justify-center">
        <a href="#started" class="rounded-lg px-5 py-4 bg-green-600 hover:bg-green-500 text-lg text-white font-semibold leading-tight">Get started</a>
        <a href="https://github.com/deviznet/vue-product-360" class="ml-4 rounded-lg px-5 py-4 bg-gray-300 hover:bg-gray-200 text-lg text-gray-800 font-semibold leading-tight">Github</a>
      </div>
    </header>
    <vue-product-360
     :reverse="true"
     :images="images"
     class="flex justify-center w-2/3 mb-20 mx-auto cursor-move">
    </vue-product-360>
    <section class="pt-20 border-t border-gray-300" id="started">
      <h2 class="text-2xl font-medium">Installation</h2>
      <p class="text-gray-600 text-lg">Quick start guide for installing and configuring the plugin</p>
      <pre class="flex flex-col rounded-lg bg-gray-800 p-5 my-10 overflow-x-scroll">
        <code class="text-gray-500 mb-1 select-none"># Using npm</code>
        <code class="text-white mb-5 select-all">npm install vue-product-360</code>
        <code class="text-gray-500 mb-1 select-none"># Using yarn</code>
        <code class="text-white select-all">yarn add vue-product-360</code>
      </pre>
      <p class="text-gray-600 text-lg">Import the plugin as a component inside your vue template</p>
      <pre class="flex flex-col rounded-lg bg-gray-800 p-5 my-10 text-white overflow-x-scroll">
        <code class="mb-1 select-all">import <span class="text-blue-500">VueProduct360</span> from <span class="text-green-500">'vue-product-360'</span>;</code>
        <code class="mb-1">export default {</code>
        <code class="mb-1"> data: <span class="text-white">({</span></code>
        <code class="mb-1">   images: [<span class="text-green-500">'/img1.png'</span>, <span class="text-green-500">'/img2.png'</span>, <span class="text-green-500">'/img3.png'</span>]</code>
        <code class="mb-1"> }),</code>
        <code class="mb-1"> components: {</code>
        <code class="mb-1 text-blue-500">   VueProduct360</code>
        <code class="mb-1"> }</code>
        <code class="mb-1">};</code>
      </pre>
      <p class="text-gray-600 text-lg">Use the tag <code class="bg-gray-800 inline-block px-1 rounded-lg text-base text-red-500">vue-product-360</code> inside your template section and set the <code class="bg-gray-800 inline-block px-1 rounded-lg text-base text-yellow-500">images</code> attribute with all images in an array.</p>
      <pre class="flex flex-col rounded-lg bg-gray-800 p-5 my-10 overflow-x-scroll">
        <code class="text-gray-500 mb-1 select-all">&lt;<span class="text-red-500">vue-product-360</span> <span class="text-yellow-500">images</span>="<span class="text-green-500">images</span>"&gt;&lt;/<span class="text-red-500">vue-product-360</span>&gt;</code>
      </pre>
    </section>
  </div>
</template>

<script>

import VueProduct360 from './components/vue-product-360.vue';

export default {
  data: () => ({
    images: [],
  }),
  beforeMount() {
    for (let index = 1; index <= 25; index += 1) {
      this.images.push(`img/${index}.png`);
    }
  },
  components: {
    VueProduct360,
  },
};
</script>
