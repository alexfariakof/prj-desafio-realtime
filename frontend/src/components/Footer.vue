<template>
  <v-footer padless dark>
    <v-col>
    <input type="radio" id="noAr"
     color= "#FF8700"
     checked="checked"
     text="NO AR"
     cols="1"
     />
     <label for="noAr"> No Ar</label>
         </v-col>
    <v-col
      class="text-left"
      cols="3"
    >
    <div>
       <v-img
       style="float:left; margin-top:3px; margin-right:8px;"
          contain
          :src="require('@/assets/tv.png')"
          transition="scale-transition"
          width="16"
          height="16"
        />
       <span > ENCONTRO 10:00</span>
       </div>
    </v-col>
   <v-col
      class="text-left"
      cols="3"
    >
    <div>
       <v-img
       style="float:left; margin-top:3px; margin-right:8px;"
          contain
          :src="require('@/assets/update.png')"
          transition="scale-transition"
          width="16"
          height="16"
        />
       <span > Última Atualização em 10:28</span>
       </div>
    </v-col>
    <v-col
      class="text-center"
      cols="2"
    >
     <!-- {{ this.momentInstance.format('dddd[.], DD [de] MMMM [de] YYYY') }} -->
    </v-col>
    <v-col
      class="text-center"
      cols="2"
    >
     <!-- <h4 class="light">// {{ this.momentInstance.format('HH:mm:ss') }} </h4> -->
    </v-col>
  </v-footer>
</template>

<script>
/*
export default {
  data () {
    return {
      momentInstance: moment()
    }
  },
  mounted () {
    setInterval(() => {
      this.momentInstance = moment()
    }, 1000)
  }
}
*/

</script>
