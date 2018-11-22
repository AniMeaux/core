import localForage from 'localforage';

export default {
  setWarningVisible(store, value) {
    localForage.setItem('warningVisible', value);
    store.commit('SET_WARNING_VISIBLE', value);
  },
  hideWarning(store) {
    localForage.setItem('warningVisible', false);
    store.commit('HIDE_WARNING');
  },
};
