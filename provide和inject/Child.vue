<template>
  <div class="container">
    <template v-for="(item,index) in names" :key="item">
        <slot :item="item" :index="index"></slot>
    </template>
    <button v-for="item in tabs" :key="item" @click="itemClick(item)"></button>
    <keep-alive include="home,about">
        <component :is="currentTab" name="zxm" :age="18" @pageClick="pageClick"></component>
    </keep-alive>
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
    <!-- 绑定到元素 -->
    <h2 ref="title"></h2>
    <!-- 绑定到组件 -->
    <nav-bar ref="navBar"></nav-bar>


    <input type="text" v-model="message">
    <input type="text" :value="message" @update:model-value="message = $event.target.value">
<!-- 组件上使用v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>

    <input type="text" v-model="value">
    <input type="text" v-model="why">
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NavBar from './NavBar.vue'
const AsyncCategory = defineAsyncComponent(()=> import('./AsyncCategory.vue'))
export default {
   props: {
    modelValue: String,
    title: String
   },
   components: {AsyncCategoryNavBar},
   emits:['update:modelValue','update:title'],
   computed:{
    value:{
      set(value){
        this.$emit("update:modelValue",value)
      },
      get() {
        return this.modelValue;
      }
    },
    why:{
      set(why) {
        this.$emit("update:title",why)
      },
      get() {
        return this.title
      }
    }
   },
   data() {
    return{
      currentTab
    }
   },
   methods: {
    itemClick(item) {
      this.currentTab = item.tab
    },
    btClick() {
      this.$refs.title
      this.$refs.navBar
    }
   }
}
</script>

<style>

</style>