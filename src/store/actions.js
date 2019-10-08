/* eslint-disable semi */
/* eslint-disable quotes */
export default {
  addPet: ({ commit }, payload) => {
    commit("appendPet", payload);
  }
};
