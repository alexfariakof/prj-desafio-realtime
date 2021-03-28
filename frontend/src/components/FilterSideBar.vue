<template>
  <div class="text-center" style="background-color:#FFFFFF;margin-right:5px;height:100%;" >
    <v-btn target="_blank"  text style="background-color:#FFFFFF;margin-right:5px;height:100%;"  @click="sheet = !sheet" >
        <v-img class="shrink mr-2" contain :src="require('@/assets/tune.png')" transition="scale-transition" width="20" height="20"  />
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet style=" display: inline; width: 30%;  float: right;" height="800px" >
          <table>
              <tr>
                  <td >
                     <v-img style="float:left" class="" contain :src="require('@/assets/tune.png')" transition="scale-transition" width="20" height="20"  />
                     <span class="textFiltros">FILTROS</span>
                  </td>
                  <td>
                      <v-btn target="_blank"  text   @click="sheet = !sheet" >
                         <v-img class="shrink mr-2" contain :src="require('@/assets/close.png')" transition="scale-transition" width="20" height="20"   />
                      </v-btn>
                  </td>
              </tr>
              <tr>
                  <td><p class="textMensagem">UTILIZE OS FILTROS ABAIXO PARA REFINAR OS RESULTADOS DA TABELA, CLIQUE NO BOTÃO APLICAR PARA SALVAR AS ALTERAÇÕES.</p></td>
              </tr>
              <tr>
                  <td>
                      <v-container fluid style="border:none">
                        <v-row>
                            <v-col cols="12">
                                <v-img style="float:left" class="" contain :src="require('@/assets/date_range.png')" transition="scale-transition" width="20" height="20"  />
                                <v-combobox class="ddpFiltro"  v-model="select" :items="items" label=" TODAS AS DATAS DE INCLUSÃO" multiple ></v-combobox>
                           </v-col>
                        </v-row>
                      </v-container>
                    </td>
              </tr>
              <tr>
                  <td >
                      <v-img style="float:left" class="" contain :src="require('@/assets/date_range.png')" transition="scale-transition" width="20" height="20"  />
                      <v-combobox class="ddpFiltro" style="border:none"  v-model="select" :items="items" label=" TODAS AS DATA DE ALTERAÇÃO" multiple ></v-combobox></td>
              </tr>
              <tr>
                  <td>
                      <v-img style="float:left" class="" contain :src="require('@/assets/hdr_strong.png')" transition="scale-transition" width="20" height="20" />
                      <v-combobox class="ddpFiltro" style="border:none"  v-model="select" :items="items" label=" ATIVOS E INATIVOS" multiple ></v-combobox></td>
              </tr>
              <tr>
                  <td><v-btn class="btnAplicar" target="_blank" border="1" style="width:100%"  >APLICAR</v-btn></td>
              </tr>

           </table>
        <div class="py-3">
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false
  })
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css?family=Audiowide+Condensed');
.textFiltros{
    width:100%;
    height: 21px;
    font-family: 'Audiowide';
    font-weight: bold;
    font-size: 16px;
    color: #333333;
}
.textMensagem{
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    color: #666666;
    text-align: justify;
}
.ddpFiltro{
    width: 100%;
    float: right;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    color: #D83367;

}
.btnAplicar{
    width: 432px;
    height: 67px;
    opacity: 40%;
    border-radius: 4px;
    border-color: #D83367;
    position: inside;
    border: 1px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    color: #D83367;

}
</style>
