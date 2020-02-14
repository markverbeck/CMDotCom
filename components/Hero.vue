<template>
  <div
    class=" w-full salonHero bg-no-repeat bg-cover bg-center relative border-b-2 border-teal-500 shadow-lg"
  >
    <div class="heroMask absolute inset-0"></div>
    <div class="w-5/6 m-auto relative">
      <div class="text-center lg:text-right pt-16 pb-24 lg:pb-32">
        <h1 class="text-3xl md:text-4xl font-semibold salonName">
          Sage Colour Studio
        </h1>
        <h2 class="mb-5 lg:mb-0 text-sm md:text-lg font-medium ">
          8010 Santa Fe Dr. Overland Park KS, 66204
        </h2>
        <a
          v-if="$nuxt.$route.path !== '/salon'"
          href="/salon"
          class=" static md:mt-10 lg:absolute  bg-teal-600 pt-2 pb-2 pr-6 pl-6 rounded text-white border-black border bookNow hover:bg-teal-700 hover:shadow-lg"
          >Book Now</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
.bookNow {
  bottom: 74px;
  right: 103px;
  transition: 0.3s;
}
.salonName {
  text-shadow: 0px 2px #37b2ab;
  @media (max-width: 1023px) {
    text-shadow: 0px 2px #fff;
  }
}
h2 {
  text-shadow: 0px 1px #37b2ab;
  @media (max-width: 1023px) {
    text-shadow: 0px 2px #fff;
  }
}
.salonHero {
  background-image: url("../assets/alysa-bajenaru-88IV5AtWjB8-unsplash.jpg");
}
.heroMask {
  background-image: linear-gradient(to right, transparent 25%, #fff 75%, #fff);
  @media (max-width: 1023px) {
    background-image: none;
    background: rgba(225, 225, 225, 0.6);
  }
}
</style>
