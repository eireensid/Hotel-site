import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adultsCount: 0,
    childrenCount: 0,
    babiesCount: 0,
    startDates: []
  },
  mutations: {
    minusAdults (state) {
      if (state.adultsCount > 0) {
        state.adultsCount--
      }
    },
    minusChildren (state) {
      if (state.childrenCount > 0) {
        state.childrenCount--
      }
    },
    minusBabies (state) {
      if (state.babiesCount > 0) {
        state.babiesCount--
      }
    },
    plusAdults (state) {
      state.adultsCount++
    },
    plusChildren (state) {
      state.childrenCount++
    },
    plusBabies (state) {
      state.babiesCount++
    },
    clearAll (state) {
      state.adultsCount = 0
      state.childrenCount = 0
      state.babiesCount = 0
    },
    setStartDates (state, dates) {
      state.startDates = dates
    }
  },
  actions: {

  },
  getters: {
    adultsCount (state) {
      return state.adultsCount
    },
    childrenCount (state) {
      return state.childrenCount
    },
    babiesCount (state) {
      return state.babiesCount
    },
    startDates (state) {
      return state.startDates
    }
  }
})