<template>
  <div class="vue-product-360">
    <template v-if="isLoaded">
      <img
        :src="carousel.currentPath" draggable="false"
        @mouseup="handleMouseUp"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @touchend="handleTouchEnd"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
      />
    </template>
    <slot class="vue-product-360__loading" v-else></slot>
  </div>
</template>

<script>

import ImagesLoader from '../utils/ImagesLoader';

export default {
  name: 'vue-product-360',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isLoaded: false,
    carousel: {
      current: 0,
      currentPath: null,
    },
    mouse: {
      isMoving: false,
      savedPosition: 0,
      currentPosition: 0,
    },
  }),
  beforeMount() {
    this.$emit('loading');
    ImagesLoader(this.images).then(() => {
      this.isLoaded = true;
      this.$emit('loaded');
    });
  },
  created() {
    this.carousel.currentPath = this.images[this.carousel.current];
  },
  methods: {
    handleMouseUp() {
      this.mouse.isMoving = false;
      this.$emit('stopping');
    },
    handleMouseLeave() {
      this.mouse.isMoving = false;
      this.$emit('stopping');
    },
    handleMouseDown(event) {
      if (!this.disabled) {
        this.mouse.savedPosition = event.pageX;
        this.mouse.isMoving = true;
        this.$emit('starting');
      }
    },
    handleTouchStart(event) {
      event.preventDefault();
      if (!this.disabled) {
        this.mouse.savedPosition = event.touches[0].pageX;
        this.mouse.isMoving = true;
        this.$emit('starting');
      }
    },
    handleTouchEnd() {
      this.mouse.isMoving = false;
      this.$emit('stopping');
    },
    handleTouchMove(event) {
      event.preventDefault();
      this.handleMovement(event.touches[0].pageX);
    },
    handleMouseMove(event) {
      this.handleMovement(event.pageX);
    },
    handleMovement(currentPosition) {
      if (this.mouse.isMoving) {
        this.mouse.currentPosition = currentPosition;
        const distance = this.mouse.currentPosition - this.mouse.savedPosition;
        if (Math.abs(distance) > this.speed) {
          this.mouse.savedPosition = this.mouse.currentPosition;
          if ((distance > 0 && !this.reverse) || (distance < 0 && this.reverse)) {
            this.slideToRight();
          } else {
            this.slideToLeft();
          }
        }
      }
    },
    slideToRight() {
      if (this.carousel.current < this.images.length) {
        this.carousel.current += 1;
        this.carousel.currentPath = this.images[this.carousel.current - 1];
      } else if (this.infinite) {
        this.carousel.current = 0;
        this.carousel.currentPath = this.images[this.carousel.current];
      }
    },
    slideToLeft() {
      if (this.carousel.current > 1) {
        this.carousel.current -= 1;
        this.carousel.currentPath = this.images[this.carousel.current - 1];
      } else if (this.infinite) {
        this.carousel.current = this.images.length;
        this.carousel.currentPath = this.images[this.carousel.current - 1];
      }
    },
    slideTo(position) {
      if (this.images[position]) {
        this.carousel.current = position;
        this.carousel.currentPath = this.images[this.carousel.current];
      }
    },
  },
};
</script>
