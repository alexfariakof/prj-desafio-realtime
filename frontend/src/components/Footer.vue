<!-- eslint-disable vue/no-v-html -->
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
      <div class="data"> {{ this.momentInstance.format('dddd[.], DD [de] MMMM [de] YYYY') }} </div>
    </v-col>
    <v-col
      class="text-center"
      cols="2"
    >
     <div class="hora" >// {{ this.momentInstance.format('HH:mm:ss') }} </div>
    </v-col>
  </v-footer>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      interval: null,
      time: null,
      momentInstance: moment
    }
  },
  beforeDestroy () {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created () {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }
}

</script>
<style>

.data{
    width: ;
}
.hora {
   width:155px;
   height:31px;
   font-size:24px;
   font-weight: 400;
   color:#FF8700;
   text-align: right;
}
</style>
