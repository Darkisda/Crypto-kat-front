import { defineStore } from "pinia";
import { Model } from "../domain/coins";

import { Service } from "../adapters/service";

export const useStore = defineStore("main", {
  state: (): Model[] => [],
  getters: {
    findByAbbreviation: (state) => {
      return (abrreviation: string) =>
        state.find((model) => model.coin_abbreviation === abrreviation);
    },
  },
  actions: {
    async findAll() {
      const service = new Service();

      const response = await service.findAll();
      this.$state = response;
    },
  },
});
