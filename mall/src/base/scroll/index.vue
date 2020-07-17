    
<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>

  import {Swiper} from 'vue-awesome-swiper';
  import {SwiperSlide} from 'vue-awesome-swiper';
  import MeLoading from 'base/loading';
  
  export default {
    name: 'MeScroll',
    components: {
      Swiper,
      SwiperSlide,
      MeLoading

    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
 
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize:true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide:true
          }
        }
      }
    }
    }
    }
     

</script>
<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  };

  .swiper-slide {
    height: auto;
  }
  
</style>
