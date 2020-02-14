<template>
  <div
    class="border-b-2 border-teal-500 pt-4 pb-4 shadow-md bg-white sticky top-0 nav"
  >
    <div class="flex w-11/12 sm:w-5/6 m-auto items-center relative">
      <div class="sm:w-full md:w-1/2 lg:w-1/2 flex items-end">
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl text-teal-500">
            carley martin verbeck
          </h1>
        </div>
      </div>
      <div class="w-1/2 flex justify-end items-end hidden lg:block text-right">
        <nav class="text-xl ">
          <nuxt-link to="/" class="text-base pr-2  hover:text-teal-500"
            >Info</nuxt-link
          >
          <nuxt-link
            to="/testimonials"
            class="text-base pr-2  hover:text-teal-500"
            >Testimonials</nuxt-link
          >
          <nuxt-link to="/bridal" class="text-base pr-2  hover:text-teal-500"
            >Bridal</nuxt-link
          >
          <nuxt-link
            to="/commercial"
            class="text-base pr-2  hover:text-teal-500"
            >Commercial</nuxt-link
          >
          <a href="/salon" class="text-base pr-2  hover:text-teal-500">Salon</a>
        </nav>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="text-teal-500 w-8 md:w-10 h-8 md:h-10 absolute right-0 block lg:hidden cursor-pointer"
        @click="openCloseModal"
      >
        <path
          d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
        />
      </svg>
    </div>
    <div class="w-11/12 sm:w-5/6 m-auto block lg:hidden">
      <div :style="mobileStyle" @click="openCloseModal">
        <nav class="text-xl leading-relaxed">
          <nuxt-link
            to="/"
            class="text-base pr-2  hover:text-teal-500 block w-0"
            >Info</nuxt-link
          >
          <nuxt-link
            to="/testimonials"
            class="text-base pr-2  hover:text-teal-500 block w-0"
            >Testimonials</nuxt-link
          >
          <nuxt-link
            to="/bridal"
            class="text-base pr-2  hover:text-teal-500 block w-0"
            >Bridal</nuxt-link
          >
          <nuxt-link
            to="/commercial"
            class="text-base pr-2  hover:text-teal-500 block w-0"
            >Commercial</nuxt-link
          >
          <a href="/salon" class="text-base pr-2  hover:text-teal-500 block w-0"
            >Salon</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileStyle: {
        transition: "",
        height: "0px",
        opacity: "0"
      }
    };
  },
  methods: {
    openCloseModal() {
      if (this.mobileStyle.height === "0px") {
        this.mobileStyle.transition =
          "height .5s ease-in-out, opacity .1s ease-in .3s";
        this.mobileStyle.height = "125px";
        this.mobileStyle.opacity = "1";
      } else {
        this.mobileStyle.transition = "height .5s ease-in-out, opacity .2s";
        this.mobileStyle.height = "0px";
        this.mobileStyle.opacity = "0";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  transition: 0.2s ease-in;
}
.nav {
  z-index: 1000;
}
.desktopNav {
  @media (max-width: 959px) {
    display: none;
  }
}

.mobileNav {
  display: none;
  @media (max-width: 959px) {
    display: block;
  }
}
</style>
