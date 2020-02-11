<template>
  <div>
    <Hero />
    <h1
      class="text-center text-2xl text-teal-500 font-bold mt-10 bg-white
     w-11/12 sm:w-5/6 md:w-1/3 m-auto border-teal-500 shadow-lg border-2 rounded pt-5 pb-5 bridal relative"
    >
      Bridal Images
    </h1>
    <div
      class="flex flex-col md:flex-row w-11/12 sm:w-5/6 m-auto  md:pt-3 pb-3 pl-3 md:pl-5 pr-3 md:pr-5 imgContain border-4 border-teal-500 shadow-lg bg-white rounded mt-10 mb-10"
    >
      <div class="w-full md:w-1/2 p-0 md:p-3">
        <pictureModal
          v-for="(image, index) in oddImages"
          v-if="
            image.Key !== 'bridal/' &&
              image.Key.includes('commercial/') === false
          "
          :key="index"
          classes="w-full max-w-full h-1/2 mb-0 md:mb-3 mt-3 border-teal-500 shadow-lg border-2 rounded leftImg"
          :img="rootURL + image.Key"
          alt="Carley Martin Commerial Photo"
        />
      </div>
      <div class="w-full md:w-1/2 p-0 md:p-3">
        <pictureModal
          v-for="(image, index) in evenImages"
          v-if="
            image.Key !== 'bridal/' &&
              image.Key.includes('commercial/') === false
          "
          :key="index"
          classes="w-full max-w-full h-1/2 mb-0 md:mb-3 mt-3 border-teal-500 shadow-lg border-2 rounded rightImg"
          :img="rootURL + image.Key"
          alt="Carley Martin Commerial Photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pictureModal from "@/components/pictureModal.vue";
import Hero from "@/components/Hero.vue";

export default {
  components: {
    pictureModal,
    Hero
  },
  data() {
    return {
      rootURL: "https://carley-martin-dot-com.s3-us-west-2.amazonaws.com/"
    };
  },
  methods: {
    isOdd(num) {
      return num % 2;
    }
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
    oddImages() {
      let oddImgs = [];
      for (let i = 0; i < this.$store.state.images.length; i++) {
        if (this.isOdd(i)) {
          oddImgs.push(this.$store.state.images[i]);
        }
      }
      return oddImgs;
    },
    evenImages() {
      let evenImgs = [];
      for (let i = 0; i < this.$store.state.images.length; i++) {
        if (!this.isOdd(i)) {
          evenImgs.push(this.$store.state.images[i]);
        }
      }
      return evenImgs;
    }
  },
  created() {
    this.$store.dispatch("fetchImages");
  }
};
</script>

<style lang="scss" scoped>
.bridal {
  margin-top: -37px;
}
.leftImg {
  transition: 0.5s;
  &:hover {
    transform: translateX(-50px) scale(1.03);
  }
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(50px) scale(1.03);
    }
  }
}

.rightImg {
  transition: 0.5s;
  &:hover {
    transform: translateX(50px) scale(1.03);
    @media (max-width: 768px) {
      transform: translateY(50px) scale(1.03);
    }
  }
}
</style>
