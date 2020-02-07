<script>
export default {
  name: "BaseLayout"
};
</script>

<template>
  <div :class="$style.container">
    <div>Header</div>
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<style lang="stylus" module>
.container {
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
