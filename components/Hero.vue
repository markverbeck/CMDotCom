<template>
  <div
    class="w-full salonHero bg-no-repeat bg-cover bg-center relative border-b-2 border-teal-500 shadow-lg"
  >
    <div class="heroMask absolute inset-0"></div>
    <div class="w-5/6 m-auto relative">
      <div class="text-center lg:text-right pt-16 pb-16 lg:pb-32 flex lg:block flex-col">
        <div
          class="bg-white lg:bg-transparent border-2 border-teal-500 lg:border-transparent border-b-0 lg:border-b rounded p-3 rounded-b-none"
        >
          <h1
            class="text-3xl md:text-4xl font-semibold salonName text-teal-500 lg:text-black"
          >Sage Colour Studio</h1>
          <h2 class="text-sm md:text-lg font-medium">8010 Santa Fe Dr. Overland Park KS, 66204</h2>
        </div>

        <a
          href="/salon"
          class="static lg:mt-10 lg:absolute bg-teal-600 pt-2 pb-2 pr-6 pl-6 rounded rounded-t-none lg:rounded-t text-white border-black border-teal-500 border-t-0 lg:border-t bookNow hover:bg-teal-700 hover:shadow-lg"
        >Book Now</a>
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
    text-shadow: none;
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
