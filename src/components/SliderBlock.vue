<template>

  <div class="slider">
    <div class="wr">
      <div class="slider-block">

        <swiper :options="swiperOption" ref="swiper">

         <swiper-slide v-for="(slide, i) in slides" :key="i">
           <img :src="returnImg(slide)" alt="">
         </swiper-slide>

       </swiper>
       <div class="swiper-button-prev" slot="button-prev"></div>
       <div class="swiper-button-next" slot="button-next"></div>

      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    ...mapState(['slides']),
  },
  methods: {
    returnImg(img) {
      return require('@/assets/'+img);
    },
  },
};
</script>

<style lang="sass" scoped>
.slider
  width: 100%
  position: relative
  margin-top: 100px
</style>
