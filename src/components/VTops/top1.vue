<template lang="html">
  <div class="">
    details
    <!-- {{$route.params.id}} -->
    {{item}}

  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {id:'apple',name:'apple babara'},
        {id:'banana',name:'banana dadada'}
    ]
    }
  },
  computed:{
    item(){
      return this.items.find(v => {
        return v.id == this.$route.params.id
      } )
    }
  }
}
</script>

<style lang="css">
</style>
