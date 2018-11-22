export default {
  getAnimals(state) {
    return state.animals.sort((a, b) => a.id - b.id);
  },
  getAnimalsAdoption(state, getters) {
    return getters.getAnimals.filter(e => e.status === 'non_adopted');
  },
  getAnimalsAdopted(state, getters) {
    return getters.getAnimals.filter(e => e.status === 'adopted');
  },
};
