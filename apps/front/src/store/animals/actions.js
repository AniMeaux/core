export default {
  setAnimals(store, animals) {
    store.commit('SET_ANIMALS', {
      animals,
    });
  },
};
