/* eslint-disable semi */
export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
  }
};
