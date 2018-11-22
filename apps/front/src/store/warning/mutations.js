export default {
  SET_WARNING_VISIBLE(state, value) {
    state.visible = value;
  },
  HIDE_WARNING(state) {
    state.visible = false;
  },
};
