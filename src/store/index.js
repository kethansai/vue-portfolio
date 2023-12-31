import { defineStore } from "pinia";

export default const useGlobalStore = defineStore("useGlobalStore", {
  state: () => {
    return {
      isCollapse: false,
      userInfo: {},
      token: "",
    };
  },
});
