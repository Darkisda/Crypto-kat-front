<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useStore } from "./store/useStore";

const store = useStore();

onBeforeMount(async () => {
  await store.findAll();
});
</script>

<template>
  <div class="w-full h-screen bg-custom overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.route-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.route-enter-active {
  transition: all 1s ease-out;
}

.route-leave-from {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
