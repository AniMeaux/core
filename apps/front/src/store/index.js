import localForage from 'localforage'

export const getters = {
  getAnimals(state) {
    return [...state.animals].sort((a, b) => a.id - b.id)
  },
  getPartners(state) {
    return [...state.partners].sort((a, b) => a.id - b.id)
  },
  getAnimalsAdoption(state, getters) {
    return getters.getAnimals.filter(e => e.status === 'non_adopted')
  },
  getAnimalsAdopted(state, getters) {
    return getters.getAnimals.filter(e => e.status === 'adopted')
  },
  isWarningVisible(state) {
    return state.visible
  }
}

export const actions = {
  setPartners(store, partners) {
    store.commit('SET_PARTNERS', {
      partners
    })
  },
  setAnimals(store, animals) {
    store.commit('SET_ANIMALS', {
      animals
    })
  },
  setWarningVisible(store, value) {
    localForage.setItem('warningVisible', value)
    store.commit('SET_WARNING_VISIBLE', value)
  },
  hideWarning(store) {
    localForage.setItem('warningVisible', false)
    store.commit('HIDE_WARNING')
  }
}

export const mutations = {
  SET_ANIMALS(state, payload) {
    state.animals = payload.animals
  },
  SET_PARTNERS(state, payload) {
    state.partners = payload.partners
  },
  SET_WARNING_VISIBLE(state, value) {
    state.visible = value
  },
  HIDE_WARNING(state) {
    state.visible = false
  }
}

export const state = () => ({
  animals: [],
  partners: [],
  visible: false
})
