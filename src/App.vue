

<template>
  <router-view></router-view>
  <notifications :closeOnClick="true" :pauseOnHover="true" />
</template>

<script setup>
import { initTE, Ripple, Modal } from "tw-elements"
import { onMounted } from "vue";

onMounted(() => {
  initTE({  Modal, Ripple });
})
</script>

<style>
body {
  font-family: 'work-sans';
}
</style>
