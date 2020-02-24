<template>
  <div class="flex flex-col items-center justify-center pt-12 pb-12">
    <div
      class="w-11/12 sm:w-5/6  lg:w-2/3 m-auto bg-white border-teal-500 shadow-lg border-2 rounded pt-5 pb-5 pl-2 pr-2 text-center"
    >
      <h1 class="text-teal-500 font-bold text-4xl pb-2">
        Ooops... {{ error.statusCode }}
      </h1>

      <img
        src="@/assets/404.jpg"
        alt="person looking at map"
        class="w-11/12 max-w-md border-teal-500 shadow-lg border-2 rounded mb-10 mt-5 ml-auto mr-auto "
      />

      <p class="pb-2 font-bold">It seems this page doesn't exist</p>
      <nuxt-link to="/" class="duration-300 text-teal-500 hover:text-teal-700"
        >Return to home page</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped></style>
