<template lang="html">
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <!-- <v-card dark color="secondary">
          <v-img
           src="img/top/top1.jpg"
            fill-height

          >
        <router-link :to="/foo" tag="li">foo</router-link>
        {{$route.params.id}}
        </v-img> -->
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
   </v-container>
</template>

<script>
export default {
  data(){
    return{

  }

}
}
</script>

<style lang="css">
</style>
