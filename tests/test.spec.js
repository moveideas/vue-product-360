import { shallowMount } from "@vue/test-utils";
import VueProductCarousel from '@/components/vue-product-carousel.vue';

describe("Mounting the component", () => {
  it("The first image needs to be loaded", () => {
    const images = ['image1', 'image2', 'image3']
    const wrapper =  shallowMount(VueProductCarousel, {
      propsData: { images }
    });
    expect(wrapper.vm.carousel.current).toBe(0);
    expect(wrapper.vm.carousel.currentPath).toBe(images[0]);
  });
});