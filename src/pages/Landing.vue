<script setup lang="ts">
import { useStore } from "../store/useStore";
import Cat from "../components/Cat.vue";

const store = useStore();
</script>

<template>
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
      <router-link
        :to="{
          name: 'Details',
          params: {
            abbreviation: coin.coin_abbreviation,
          },
        }"
        class="border-2 border-green-100 bg-green-400/70 backdrop-blur-md rounded-full px-8 text-lg text-white transition-all duration-300 hover:bg-green-600/50"
        v-for="coin in store.$state"
        v-bind:key="coin.id"
      >
          {{ coin.coin_title }}
      </router-link>
    </div>
  </div>
</template>