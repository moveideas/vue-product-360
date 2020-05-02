---
home: true
navbar: false
heroText: A flexible 360 carousel in Vue.js
tagline: Loop a series of images in a 360 rotatation carousel with this plugin for Vue.js
actionText: Get started →
actionLink: /guide/
features:
  - title: Frontend Developer
    details: I am a frontend developer with expertise in Vue.js and Nuxt.js
  - title: Tech Blogger
    details: I love writing tech articles to share my knowledge on frontend frameworks, libraries, best practices and more.
  - title: Traveller
    details: Travelling is my favourite activity, I am an avid hiker and backpacker
footer: Notes
---

<TestComponent></TestComponent>

## Installation

Installing with npm is recommended and it works seamlessly with webpack.

``` js
npm install test
```

## Usage

``` js
import VueProductCarousel from 'vue-product-carousel';

export default {
  data: ({
    images: ['/img1.png', '/img2.png', '/img3.png']
  }),
  components: {
    VueProductCarousel
  }
};
```

``` html
<vue-product-carousel :images="images"></vue-product-carousel>
```