<template>
  <div>
    <Hero />
    <div class=" flex items-center mb-16">
      <div class="w-full ">
        <h1
          class="text-center text-2xl text-teal-500 font-bold mb-10 bg-white
    w-11/12 sm:w-5/6 md:w-1/3 m-auto border-teal-500 shadow-lg border-2 rounded pt-5 pb-5 testimonial relative"
        >
          Testimonials
        </h1>
        <a
          :href="rev.url"
          target="_blank"
          v-for="(rev, index) in reviews"
          :key="index"
        >
          <div
            class="w-11/12 md:w-2/3 m-auto bg-white mt-5 p-5 border-4 border-teal-500 shadow-lg revDiv relative"
          >
            <p>{{ rev.text }}</p>
            <div class="rating flex mt-2">
              <svg
                v-for="rate in rev.rating"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="fill-current  w-5 h-5 mr-5 "
              >
                <path
                  d="M528.53 171.5l-146.36-21.3-65.43-132.39c-11.71-23.59-45.68-23.89-57.48 0L193.83 150.2 47.47 171.5c-26.27 3.79-36.79 36.08-17.75 54.58l105.91 103-25 145.49c-4.52 26.3 23.22 46 46.48 33.69L288 439.56l130.93 68.69c23.26 12.21 51-7.39 46.48-33.69l-25-145.49 105.91-103c19-18.49 8.48-50.78-17.79-54.57zm-90.89 71l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z"
                  class="fa-secondary text-teal-600"
                />
                <path
                  d="M437.64 242.46l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z"
                  class="fa-primary text-teal-500"
                />
              </svg>
            </div>
            <div class="flex">
              <div
                class="rounded-full w-8 h-8 overflow-hidden bg-black mt-3 border border-teal-500"
              >
                <img :src="rev.user.image_url" alt="Yelp user img" class="" />
              </div>
              <div class="flex items-end pl-2 text-gray-500">
                <p>- {{ rev.user.name }}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="fill-current text-teal-500 w-5 h-5 mr-5 mb-5 absolute right-0 bottom-0"
              >
                <path
                  d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/Hero.vue";
import NProgress from "nprogress";
export default {
  components: {
    Hero
  },
  data() {
    return {
      returnedReviews: this.reviews
    };
  },
  created() {
    if (process.client) {
      NProgress.start();
      this.$store.dispatch("fetchReviews").then(() => {
        NProgress.done();
      });
    }
  },
  computed: {
    ...mapState(["reviews"])
  }
};
</script>

<style lang="scss" scoped>
.testimonial {
  margin-top: -37px;
}
img {
  width: 100%;
  max-width: 100px;
}

.revDiv {
  transition: 0.5s ease-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
