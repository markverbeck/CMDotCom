import EventService from "@/services/EventServices.js";

export const state = () => {
  return {
    reviews: [],
    test: "test",
    images: []
  };
};

export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  },
  RESET_REVIEWS(state) {
    state.reviews = [];
  },
  SET_IMAGES(state, images) {
    state.images = images;
  },
  RESET_IMAGES(state) {
    state.images = [];
  }
};

export const actions = {
  fetchReviews({ commit }) {
    commit("RESET_REVIEWS");
    EventService.getReviews()
      .then(response => {
        commit("SET_REVIEWS", response.data.reviews);
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetchImages({ commit }) {
    commit("RESET_IMAGES");
    EventService.getImages()
      .then(response => {
        commit("SET_IMAGES", response.Contents);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
