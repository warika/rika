<template lang="html">
  <div class="">
    <span>BODY</span>
      <p>default</p>
      <router-view ></router-view>
      <p>a</p>
      <router-view name="a"></router-view>
      <p>b</p>
      <router-view name="b"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
