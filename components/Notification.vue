<template>
  <div
    class="absolute bg-red-500 border-2 border-red-500 p-5 rounded text-center"
    :style="divStyle"
  >
    <p class="text-white">{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null,
      timeOut: null,
      leaveScreen: null,
      divStyle: {
        top: "10px",
        transition: ".5s ease-in-out",
        zIndex: "2000",
        transform: "translateY(-200px)"
      }
    };
  },
  mounted() {
    this.timeOut = setTimeout(() => {
      this.divStyle.transform = "translateY(200px)";
    }, 1000);

    this.leaveScreen = setTimeout(() => {
      this.divStyle.transform = "translateY(-200px)";
    }, 6000);

    this.timeout = setTimeout(() => {
      this.$store.dispatch("deleteNotif", this.notification);
    }, 7000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
    clearTimeout(this.timeOut);
  }
};
</script>

<style lang="scss" scoped>
div {
  right: 30%;
  left: 30%;
  @media (max-width: 959px) {
    right: 25%;
    left: 25%;
  }
  @media (max-width: 759px) {
    right: 5%;
    left: 5%;
  }
}
</style>
