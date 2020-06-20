<template>
    <swiper :options="swiperOption">
      <slot>
          
      </slot>
      <div class="swiper-pagination" v-if="pagination" slot="pagination">

      </div>
    </swiper>

</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
    name: 'MeSlider',
    component: {
        swiper,
        swiperSlide
     },
     props: {
         direction: {
             type:String,
             default: 'horizontal',
             validator(value) {
                 return [
                     'horizontal',
                     'vertical'
                 ].indexOf(value) > -1;
             }
         },
         interval: {
             type: Number,
             default: 3000,
             validator(value) {
                 return value >= 0;
             }
         },
         loop: {
             type:Boolean,
             default: true
         },
         pagination: {
              type:Boolean,
             default: true
         }
         
     },
     data() {
         return {
             swiperOption
         };
     }
};
</script>

<style lang="scss" scoped>

</style>