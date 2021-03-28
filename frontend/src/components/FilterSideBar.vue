<template>
  <div class="text-center" style="background-color:#FFFFFF;margin-right:5px;height:100%;" >
    <v-btn target="_blank"  text style="background-color:#FFFFFF;margin-right:5px;height:100%;"  @click="sheet = !sheet" >
        <v-img class="shrink mr-2" contain :src="require('@/assets/tune.png')" transition="scale-transition" width="20" height="20"  />
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet style=" display: inline; width: 30%;  float: right;" height="800px" >
          <table>
              <tr>
                  <td>
                     <v-img style="float:left" class="" contain :src="require('@/assets/tune.png')" transition="scale-transition" width="20" height="20"  />
                     FILTROS</td>
                  <td>
                      <v-btn target="_blank"  text   @click="sheet = !sheet" >
                         <v-img class="shrink mr-2" contain :src="require('@/assets/close.png')" transition="scale-transition" width="20" height="20"   />
                      </v-btn>
                  </td>
              </tr>
              <tr>
                  <td>UTILIZE OS FILTROS ABAIXO PARA REFINAR OS RESULTADOS DA TABELA, CLIQUE NO BOTÃO APLICAR PARA SALVAR AS ALTERAÇÕES.</td>
              </tr>
              <tr>
                  <td>
                      <v-img style="float:left" class="" contain :src="require('@/assets/date_range.png')" transition="scale-transition" width="20" height="20"  />
                      TODAS AS DATAS DE INCLUSÃO
                    </td>
              </tr>
              <tr>
                  <td>
                      <v-img style="float:left" class="" contain :src="require('@/assets/date_range.png')" transition="scale-transition" width="20" height="20"  />
                      TODAS AS DATA DE ALTERAÇÃO</td>
              </tr>
              <tr>
                  <td>
                      <v-img style="float:left" class="" contain :src="require('@/assets/hdr_strong.png')" transition="scale-transition" width="20" height="20" />
                      ATIVOS E INATIVOS</td>
              </tr>
              <tr>
                  <td><v-btn target="_blank" style="width:100%"  >APLICAR</v-btn></td>
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
