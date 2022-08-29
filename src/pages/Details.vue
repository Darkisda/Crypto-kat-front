<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "../store/useStore";

const store = useStore();
const route = useRoute();

const coin = store.$state.find(
  (c) => c.coin_abbreviation === route.params.abbreviation
);
</script>

<template>
  <div class="container p-2 overflow-auto w-full h-full mx-auto">
    <div class="pt-20 pb-14">
      <router-link :to="{ name: 'Landing' }">
        <vue-feather type="arrow-left" class="text-white"></vue-feather>
      </router-link>
      <h1 class="text-white text-4xl">
        {{ coin?.coin_title }} ({{ coin?.coin_abbreviation }})
      </h1>
      <hr class="my-2" />
      <p
        v-html="coin?.coin_description"
        class="text-white text-lg font-light"
      ></p>
    </div>
  </div>
</template>
