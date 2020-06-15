<template>
 <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
        <i class="iconfont icon-home"> </i>
         <span>首页</span>
    </router-link>
     <router-link class="g-tabbar-item" to="/category">
        <i class="iconfont icon-category">  </i>
            <span>分类</span>
      
    </router-link>
     <router-link class="g-tabbar-item" to="/cart">
        <i class="iconfont icon-cart"> </i>
            <span>购物车</span>
       
    </router-link>
     <router-link class="g-tabbar-item" to="/personal">
        <i class="iconfont icon-personal">  </i>
            <span>个人</span>
      
    </router-link>
 </div>
   
   
</template>

<script>
export default {
    name: 'CTabbar'
};
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
     .g-tabbar {
        display: flex;
        width: 100%;
        height: $tabbar-height;
        background-color: #fff;

        .g-tabbar-item{
            flex: 1;
            @include flex-center(column);
            .iconfont {
                margin-bottom: 4px;
                font-size: $icon-font-size;
            }

        }
    }
   .router-link-active {
       color:$link-active-color;
   }
</style>