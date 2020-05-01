<template>
  <img
    :src="spinner.currentPath" draggable="false"
    @mouseup="handleMouseUp"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @touchend="handleTouchEnd"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  />
</template>

<script>

import ImagesLoader from '../utils/ImagesLoader';

export default {
  name: 'vue-product-carousel',
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true,
    },
    speed: {
      type: Number,
      default: 10,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isLoaded: false,
    spinner: {
      current: 0,
      currentPath: null,
    },
    mouse: {
      initialPosition: 0,
      currentPosition: 0,
      isMoving: false,
    },
    test: null,
  }),
  beforeMount() {
    ImagesLoader(this.images).then(() => {
      this.isLoaded = true;
    });
  },
  created() {
    this.spinner.currentPath = this.images[this.spinner.current];
  },
  methods: {
    handleMouseUp() {
      this.mouse.isMoving = false;
    },
    handleMouseDown(event) {
      this.mouse.initialPosition = event.pageX;
      this.mouse.isMoving = true;
    },
    handleTouchStart(event) {
      this.mouse.initialPosition = event.touches[0].pageX;
      this.mouse.isMoving = true;
    },
    handleTouchEnd() {
      this.mouse.isMoving = false;
    },
    handleTouchMove(event) {
      this.handleMovement(event.touches[0].pageX);
    },
    handleMouseMove(event) {
      this.handleMovement(event.pageX);
    },
    handleMovement(currentPosition) {
      if (this.mouse.isMoving) {
        this.mouse.currentPosition = currentPosition;
        const distance = this.mouse.currentPosition - this.mouse.initialPosition;
        if (Math.abs(distance) > this.speed) {
          this.mouse.initialPosition = this.mouse.currentPosition;
          if ((distance > 0 && !this.reverse) || (distance < 0 && this.reverse)) {
            if (this.spinner.current < this.images.length) {
              this.spinner.current += 1;
              this.spinner.currentPath = this.images[this.spinner.current - 1];
            } else {
              this.spinner.current = 0;
              this.spinner.currentPath = this.images[this.spinner.current];
            }
          } else if (this.spinner.current > 1) {
            this.spinner.current -= 1;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          } else {
            this.spinner.current = this.images.length;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        }
      }
    },
  },
};
</script>
