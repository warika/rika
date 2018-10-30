<template lang="html">
  <div >

    <v-list>
         <v-list-tile
           v-for="item in items"
           :key="item"
           :to="'/details/'+item"
         >{{item}}
         </v-list-tile>
       </v-list>
    <!-- <v-container grid-list-lg text-xs-center>
    <v-jumbotron

        dark
        src="img/home/home1.jpg"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Gradient over Image</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>

      <v-layout row wrap>
        <v-flex v-for="i in 4" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-jumbotron src="img/home/home1.jpg">
               <v-container fill-height>
                 <v-layout align-center>
                   <v-flex>

                     <v-divider class="my-3"></v-divider>

                     <div class="title mb-3">Check out our newest features!</div>

                   </v-flex>
                 </v-layout>
               </v-container>
             </v-jumbotron>

          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
       <v-flex v-for="i in 4" :key="`6${i}`" xs6>
         <v-card >
           <v-img
            src="img/home/home1.jpg"
             fill-height
           ></v-img>



           <v-card-actions>
             <v-btn flat color="orange">Share</v-btn>
             <v-btn flat color="orange">Explore</v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
     </v-layout>
  </v-container> -->

  </div>

</template>

<script>
export default {
  data(){
    return{
      items:[
        'apple',
        'banana',
      '  carrot'
      ]
    }
  }
}
</script>

<style lang="css">
</style>
