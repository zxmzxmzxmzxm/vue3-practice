<template>
  <div class="container">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
   
}
</script>

<style>
.container{
    display: flex;
}
.left,.right{
    width: 100rpx;
}
.center{
    flex: 1;
}
</style>