# 🎆 Vue Product 360

Loop a series of images in a 360 rotatation carousel with this plugin for Vue.js

![Demo Screenshot](./public/demo-screenshot.gif)

[▶️ Try the demo](https://deviznet.github.io/vue-product-360/) or
[▶️ Start a sandbox (soon)]()

## Installation
Quick start guide for installing and configuring the plugin

```sh
# Using npm
npm install @deviznet/vue-product-360

# Using yarn
yarn add @deviznet/vue-product-360
```

## Usage

```html
<template>
  <VueProduct360 :images="images">
    <p>Loading</p>
  </VueProduct360>
</template>

<script>
  import VueProduct360 from 'vue-product-360'

  export default {
    data() {
      return {
        images: ['img1.png', 'img2.png', 'img3.png'],
      },
    },
    components: {
      VueProduct360,
    },
  };
</script>

```

# Props

| Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| images | `Array[String]` | **required** | `[]` | Array of images to be looped|
| speed | `Number` | optional | `10` | Rotation speed |
| infinite | `Boolean` | optional | `true` | Infinite loop |
| reverse | `Boolean` | optional | `false` | Change the rotation direction |
| disabled | `Boolean` | optional | `false` | Disabled the rotation |

# Events

| Name | Description |
|-|-|
| loading | Images are currently downloading |
| loaded | All images are downloaded |
| starting | The rotation started with the following events: mousedown or touchstart |
| stopping | The rotation is stopped |
