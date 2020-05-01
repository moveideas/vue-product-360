import { shallowMount } from "@vue/test-utils";
import VueProductCarousel from '@/components/vue-product-carousel.vue';

describe("Mounting VueProductSpinner", () => {
  it("should mount the component", () => {
    shallowMount(VueProductCarousel);
    expect(0).toBe(0);
  });
});