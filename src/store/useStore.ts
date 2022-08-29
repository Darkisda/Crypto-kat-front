import { defineStore } from "pinia";
import { Model } from "../domain/coins";

import { Service } from "../adapters/service";

export const useStore = defineStore("main", {
  state: (): Model[] => [],
  actions: {
    async findAll() {
      const service = new Service();

      const response = await service.findAll();
      this.$state = response;
    },
  },
});
