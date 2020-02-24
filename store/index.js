import EventService from "@/services/EventServices.js";

export const state = () => {
  return {
    reviews: [],
    test: "test",
    images: [],
    notifications: []
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
  },
  SET_NOTIFICATION(state, notification) {
    const ID = Math.floor(Math.random() * 100 + 1);
    state.notifications.push({
      ...notification,
      id: ID
    });
  },
  DELETE_NOTIFICATION(state, notification) {
    state.notifications = state.notifications.filter(
      notif => notif.id !== notification.id
    );
  }
};

export const actions = {
  fetchReviews({ commit, dispatch }) {
    commit("RESET_REVIEWS");
    return EventService.getReviews()
      .then(response => {
        commit("SET_REVIEWS", response.data.reviews);
      })
      .catch(err => {
        const error = {
          type: "error",
          message: "There was a problem fetching the testimonials"
        };
        dispatch("setNotif", error);
      });
  },
  fetchImages({ commit, dispatch }) {
    commit("RESET_IMAGES");
    return EventService.getImages()
      .then(response => {
        commit("SET_IMAGES", response.Contents);
      })
      .catch(err => {
        const error = {
          type: "error",
          message: "There was a problem fetching the images"
        };
        dispatch("setNotif", error);
      });
  },
  setNotif({ commit }, notification) {
    commit("SET_NOTIFICATION", notification);
  },
  deleteNotif({ commit }, notification) {
    commit("DELETE_NOTIFICATION", notification);
  }
};
