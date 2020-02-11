import Vue from "vue";
import VueLazyload from "vue-lazyload";
import error from "../assets/exclamation-circle.svg";
import loading from "../assets/lips.svg";
Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
