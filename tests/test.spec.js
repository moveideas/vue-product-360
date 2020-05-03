import { shallowMount } from "@vue/test-utils";
import VueProduct360 from '@/components/vue-product-360.vue';

describe("Mounting the component", () => {
  it("The first image needs to be loaded", () => {
    const images = ['image1', 'image2', 'image3']
    const wrapper =  shallowMount(VueProduct360, {
      propsData: { images }
    });
    expect(wrapper.vm.carousel.current).toBe(0);
    expect(wrapper.vm.carousel.currentPath).toBe(images[0]);
  });
});