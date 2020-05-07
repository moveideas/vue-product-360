<template>
  <div class="vue-product-360">
    <template v-if="isLoaded">
      <img
        draggable="false"
        :src="carousel.currentPath"
        :class="imageClass"
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
    imageClass: {
      type: String,
      default: null,
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
    keepPosition: {
      type: Boolean,
      default: true,
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
      savedPositionX: 0,
      currentPositionX: 0,
    },
  }),
  beforeMount() {
    this.$emit('loading');
    this.handleLoading().then(() => {
      this.$emit('loaded');
    });
  },
  created() {
    this.carousel.currentPath = this.images[this.carousel.current];
  },
  methods: {
    handleLoading() {
      return ImagesLoader(this.images).then(() => {
        this.isLoaded = true;
      });
    },
    handleMouseUp() {
      this.mouse.isMoving = false;
      this.$emit('stopping', { position: this.carousel.current });
    },
    handleMouseLeave() {
      if (this.mouse.isMoving) {
        this.mouse.isMoving = false;
        this.$emit('stopping', { position: this.carousel.current });
      }
    },
    handleMouseDown(event) {
      if (!this.disabled) {
        this.mouse.savedPositionX = event.pageX;
        this.mouse.isMoving = true;
        this.$emit('starting', { position: this.carousel.current });
      }
    },
    handleTouchStart(event) {
      event.preventDefault();
      if (!this.disabled) {
        this.mouse.savedPositionX = event.touches[0].pageX;
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
        this.mouse.currentPositionX = currentPosition;
        const distance = this.mouse.currentPositionX - this.mouse.savedPositionX;
        if (Math.abs(distance) > this.speed) {
          this.mouse.savedPositionX = this.mouse.currentPositionX;
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
        this.carousel.currentPath = this.images[position === 0 ? position : position - 1];
      }
    },
  },
  watch: {
    images: {
      handler() {
        this.$emit('refreshing');
        this.handleLoading().then(() => {
          const positionExist = this.images[this.carousel.current];
          if (this.keepPosition && positionExist) {
            this.slideTo(this.carousel.current);
          } else {
            this.slideTo(0);
          }
          this.$emit('refreshed');
        });
      },
    },
  },
};
</script>
