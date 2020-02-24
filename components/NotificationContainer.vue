<template>
  <div>
    <Notification
      v-for="(notification, index) in notifications"
      :key="index"
      :notification="notification"
    />
  </div>
</template>

<script>
import Notification from "@/components/Notification.vue";

export default {
  components: {
    Notification
  },
  computed: {
    notifications() {
      return this.$store.state.notifications;
    }
  }
};
</script>

<style lang="scss" scoped></style>
