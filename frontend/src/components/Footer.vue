<!-- eslint-disable vue/no-v-html -->
<template>
  <v-footer padless color="#333333">
    <v-col>
    <input type="radio" id="noAr" class="radioStatus" color= "#FF8700" checked="checked" cols="1" />
        <label for="noAr" class="status"> No Ar</label>
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
       <span class="mensagem" > ENCONTRO 10:00</span>
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
       <span class="textAtualizacao" > Última Atualização em 10:28</span>
       </div>
    </v-col>
    <v-col
      class="text-center"
      cols="2"
    >
       <div class="data">
        <span class="formatData1">{{ semana }}, </span>
        <span class="formatData2">{{ dia }}</span>
        <span class="formatData1" > de </span>
        <span class="formatData2">{{ mes }}</span>
        <span class="formatData1" > de </span>
        <span class="formatData2">{{ ano }}</span>
       </div>
    </v-col>
    <v-col
      class="text-center"
      cols="2"
    >
     <div class="hora" >// {{ time }} </div>
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
      semana: moment(new Date()).format('dddd'),
      dia: moment(new Date()).format('DD'),
      mes: moment(new Date()).format('MMMM'),
      ano: moment(new Date()).format('YYYY')
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  created () {
    this.interval = setInterval(() => {
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
.radioStatus{
    font-family: material;
    font-weight: 400;
    font-size: 16px;
    text-align:left;
    vertical-align: top;
}

.radioStatus:checked{
  border-color: #FF8700;
  color:#FF8700;
  background: #FF8700;
}
.status{
   width:45px;
   height:15px;
   font-family: Audiowide;
   font-weight: 400;
   font-size:12px;
   color:#FF8700;
   text-align: right;
   text-align:left;
   vertical-align: top;
}
.mensagem{
    width:121px;
    height: 16px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    color:#E9E9E9;
    text-align: left;
    vertical-align: text-top;
}
.textAtualizacao{
    width:175px;
    height:16px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    color:#E9E9E9;
}
.data{
    width:auto;
    height:16px;
    text-align: right;
}
.formatData1{
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    color:#E9E9E9;
}
.formatData2{
    font-family: Roboto;
    font-style: italic;
    font-size: 14px;
    font-weight: 500;
    color:#E9E9E9;
}
.hora {
   width:155px;
   height:31px;
   font-size:24px;
   font-weight: 400;
   color:#FF8700;
   text-align: right;
   font-family: Audiowide;
}
</style>
