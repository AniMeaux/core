import Vuex from 'vuex';

import warning from './warning';
import animals from './animals';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      warning,
      animals,
    },
  });
};

export default createStore;
