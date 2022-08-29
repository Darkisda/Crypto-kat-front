<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useStore } from "./store/useStore";
import Cat from "./components/Cat.vue";

const store = useStore();

onBeforeMount(async () => {
  await store.findAll();
});
</script>

<template>
  <div class="w-full h-screen bg-custom">
    <div
      class="container p-2 w-full h-full mx-auto flex items-center justify-center flex-col"
    >
      <div class="w-full flex flex-col items-center justify-center">
        <div class="flex items-center justify-center gap-8 flex-wrap">
          <h1 class="text-white text-5xl font-bold text-center">KryptoKat</h1>
          <Cat />
        </div>
        <p class="text-lg text-white my-2 text-center">
          A free crypto currency information page.
        </p>
      </div>
      <div class="w-full flex gap-4 flex-wrap items-center justify-center">
        <p
          class="border-2 border-green-100 rounded-full px-8 text-lg text-white"
          v-for="coin in store.$state"
          v-bind:key="coin.id"
        >
          {{ coin.coin_title }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-custom {
  background: rgb(102, 187, 106);
  background: radial-gradient(
    circle,
    rgba(102, 187, 106, 1) 0%,
    rgba(46, 125, 50, 1) 53%,
    rgba(27, 94, 32, 1) 72%,
    rgba(19, 66, 22, 1) 87%,
    rgba(14, 48, 16, 1) 95%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
