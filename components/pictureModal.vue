<template>
  <div>
    <img v-lazy="img" :alt="alt" :class="classes" @click="openClose" />
    <div
      class="fixed inset-0 flex items-center justify-center mt-18 lg:mt-20 mask"
      @click="openClose"
      :style="divStyle"
    >
      <img
        :src="img"
        :alt="alt"
        class="w-5/6 md:w-1/3 h-5/6 md:h-1/3 fixed  shadow-lg  rounded"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String, required: true },
    alt: { type: String, required: true },
    classes: { type: String, required: true }
  },
  data() {
    return {
      opened: false,
      divStyle: {
        transition: "1s",

        opacity: "0",
        zIndex: "-1"
      }
    };
  },
  methods: {
    openClose() {
      this.opened = !this.opened;
      if (this.divStyle.zIndex === "-1") {
        this.divStyle.zIndex = "1";
        this.divStyle.opacity = "1";
      } else {
        this.divStyle.zIndex = "-1";
        this.divStyle.opacity = "0";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  background: rgba(55, 178, 171, 0.8);
}
.leftImg {
  transition: 0.5s;
  &:hover {
    transform: translateX(-50px) scale(1.03);
    cursor: pointer;
  }
}

.rightImg {
  transition: 0.5s;
  &:hover {
    transform: translateX(50px) scale(1.03);
    cursor: pointer;
  }
}
</style>
