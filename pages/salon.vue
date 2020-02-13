<template>
  <div>
    <Hero />
    <h1
      class="text-center text-2xl text-teal-500 font-bold relative bg-white
    w-11/12 sm:w-5/6 md:w-1/3 m-auto border-teal-500 shadow-lg border-4 rounded pt-5 pb-5 bookNow"
    >
      Book Now!
    </h1>
    <div
      class="w-11/12 sm:w-5/6 flex m-auto border-teal-500 shadow-lg border-4 rounded bg-white mt-10 mb-10"
    >
      <div class="w-full overflow-hidden">
        <iframe
          src="https://squareup.com/appointments/buyer/widget/1f2ahdn7uompb2/C6Q1TC96NTSR2"
          style="min-height: 500px; width: 100%; height: 100%; border: none;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  components: {
    Hero
  }
};
</script>

<style lang="scss">
iframe {
  // flex: 1;
  margin-top: -40px;
  height: 800px !important;
  border-color: #37b2ab !important;
  border-radius: 0.25rem !important;
  border-width: 2px !important;
  .widget-header {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.bookNow {
  margin-top: -37px;
}
</style>
