<template>
  <div
    class="absolute bg-white border-2 border-red-500 p-5 rounded"
    :style="divStyle"
  >
    <p class="text-red-500">{{ notification.message }}</p>
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
        right: "40px",
        transition: ".5s ease-in-out",
        zIndex: "2000",
        transform: "translateY(-100px)"
      }
    };
  },
  mounted() {
    this.timeOut = setTimeout(() => {
      this.divStyle.transform = "translateY(0px)";
    }, 1000);

    this.leaveScreen = setTimeout(() => {
      this.divStyle.transform = "translateY(-100px)";
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

<style lang="scss" scoped></style>
