<template>
  <div>
    <Hero />
    <h1
      class="text-center text-2xl text-teal-500 font-bold mb-10 bg-white w-11/12 sm:w-5/6 md:w-1/3 m-auto border-teal-500 shadow-lg border-2 rounded pt-5 pb-5 info relative"
    >
      Info
    </h1>
    <div class="flex-1 flex items-center">
      <div class="flex w-11/12 sm:w-5/6 m-auto pt-10 pb-10">
        <div
          class="bg-white p-4 md:p-8 imgDiv border-4 border-teal-500 shadow-lg"
        >
          <div class="mb-5 md:mb-10 m-auto">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-women-gossiping-in-studio-royalty-free-image-72131155-1558549225.jpg?crop=0.784xw:1.00xh;0.146xw,0&resize=480:*"
              alt
              class="w-full max-w-sm border-4 border-teal-500 rounded-full shadow-lg m-auto"
            />
          </div>

          <h2 class="text-center text-2xl text-teal-500 font-bold">
            Carley Martin Verbeck
          </h2>
          <h3 class="text-center text-gray-600">
            Hair Stylist / Makeup Artist
          </h3>
          <hr class="mt-2" />
          <div class="mt-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              mattis nulla, at pretium erat. Vestibulum iaculis pretium est in
              ornare. Suspendisse et magna et enim consectetur vulputate a nec
              enim. Nullam mollis lorem eu massa aliquet porttitor. Duis feugiat
              tincidunt mi, et facilisis tellus lobortis sed. Donec fermentum
              dapibus convallis. Suspendisse ac aliquam turpis, sed dapibus
              eros. Integer finibus sem vitae iaculis laoreet. Quisque
              condimentum magna eu nulla vulputate, at hendrerit elit efficitur.
            </p>
            <p>
              Maecenas vel purus mi. Sed scelerisque tempus egestas. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec vel semper orci, quis rhoncus velit. Sed
              cursus pharetra ante. Ut tincidunt accumsan urna scelerisque
              fermentum. Donec ut lorem egestas, sagittis turpis nec, vulputate
              odio. Vestibulum tempus orci eu mattis congue. Vestibulum euismod
              lorem id fermentum condimentum. Pellentesque aliquet faucibus
              urna, in dapibus mauris facilisis eleifend. Proin velit nibh,
              egestas vel augue vel, venenatis consequat sapien. Ut vel interdum
              mi, ac maximus dolor.
            </p>
            <p>
              Cras vulputate, risus sit amet feugiat hendrerit, lacus augue
              vestibulum elit, finibus suscipit arcu ipsum eget leo. Suspendisse
              sit amet auctor ex. Nullam tempus rutrum ullamcorper. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Mauris pretium, urna at ornare iaculis, felis
              orci condimentum ex, sed euismod massa lectus eu enim. Nulla id
              erat vestibulum, mattis orci in, dapibus sapien. Nam vehicula
              pharetra augue nec euismod. Sed eu feugiat leo, vitae fringilla
              justo. Suspendisse iaculis eros nec velit pretium viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Hero from "@/components/Hero.vue";
import NProgress from "nprogress";

export default {
  components: {
    Logo,
    Hero
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

<style>
.info {
  margin-top: -37px;
}
.imgDiv {
  width: fit-content;
}
.infoDiv {
  height: 25em;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
