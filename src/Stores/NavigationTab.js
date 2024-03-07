import { defineStore } from 'pinia'

export const useNavigationTabStore = defineStore('navigationTab', {
    state: () => ({ activeTab:'dashboard'}),
    // getters: {
    //   getActiveTab: (state) => state.activeTab,
    // },
    actions: {
      setActiveTab(tab) {
        this.activeTab = tab
      },
    },
  })