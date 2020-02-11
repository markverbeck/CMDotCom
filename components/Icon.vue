<template>
  <div>
    <a href="#" target="_blank">
      <img :src="src" :alt="alt" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
