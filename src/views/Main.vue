<template lang="html">
  <div class="">
    <v-app>

      <VNavToolbar app></VNavToolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>

import VNavToolbar from '@/components/navbars/VNavToolbar.vue'
export default {

  components:{
    VNavToolbar
  }

}
</script>

<style lang="css">
</style>
