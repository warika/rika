<template>

  <!-- <v-tabs
    centered
    color="cyan"
    dark
    light
    icons-and-text
  >



  <v-tab  :to="menu.to" exact v-for="menu in menus">

      <v-menu open-on-hover offset-y >
        <span slot="activator">
          {{menu.text}}

        </span>
          <v-list v-if="menu.items.length > 0">
            <v-list-tile
              v-for="(item, index) in menu.items"
              :key="index"
              @click=""
            >
              <v-list-tile-title >{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
  </v-tab> -->
    <!-- <v-tabs-slider color="yellow"></v-tabs-slider> -->



<v-tabs
centered
color="cyan"
dark
text>
    <v-container >
       <v-layout row>
         <v-flex  xs12 sm6 md3 order-md1 order-sm1>
           <v-tab to="/home"  exact > Logo </v-tab>
         </v-flex>
         <v-flex xs12 sm6 md6 order-md2 order-sm2>
          <v-tab :to="menu.to" exact v-for="menu in menus" >
            <v-menu open-on-hover offset-y >
              <span slot="activator">
                {{menu.text}}
              </span>
                <v-list v-if="menu.items.length > 0">
                  <v-list-tile
                    v-for="(item, index) in menu.items"
                    :key="index"
                    @click="">
                    <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
            </v-menu>
          </v-tab>

         </v-flex>
         <v-flex xs12 sm6 md3 order-md3 order-sm3>
            <v-tab>55ssssssssssssssssssssssssssss</v-tab>
         </v-flex>
       </v-layout>
    </v-container>


   </v-tabs>

</v-tabs>


</template>
<script>

  export default {
    data () {
      return {


        showMenu: true,
        menus:[
          {
            to:'/newin',
            text:'มาใหม่',
            icon:'phone' ,
            items: [
             { title: 'Click Me' },
             { title: 'Click Me' },
             { title: 'Click Me' },
             { title: 'Click Me 2' }
            ]
          },
          {to:'/sale',text:'ลดราคา',icon:'favorite',items:[]},
          {to:'/dress',text:'เดรส',icon:'phone',items:[]},
          {to:'/top',text:'ท่อนบน',icon:'phone',items:[]},
          {to:'/bottom',text:'ท่อนล่าง',icon:'favorite',items:[]},
          {to:'/accessories',text:'กระเป๋าและเครื่องประดับ',icon:'phone',items:[]},

        ],

      }
    },
    components:{

    }
  }
</script>
