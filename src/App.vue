<template>
  <v-app>
    <side-bar @selectOption="onSelectOption"></side-bar>
    <v-main>
      <image-gallery :isColored="isColored"></image-gallery>
    </v-main>
  </v-app>
</template>
<script setup>
import SideBar from './components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';

import { ref } from 'vue';
  const isColored = ref(true);

  function onSelectOption(isColor){
    isColored.value = isColor;
  }
</script>
