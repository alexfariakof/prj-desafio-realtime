<template>
<v-card>
    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="lstUsuario" dense v-bind:search="search">
    </v-data-table>
<span>{{ teste }}</span>
</v-card>
</template>

<script>
import ListaUsuario from '../store/MOCK_DATA.json'
export default {
  props: ['search'],
  data () {
    return {
      teste: 'duncionando porrraa ',
      headers: [{
        align: 'start',
        filterable: false
      },
      {
        text: 'USUÁRIO',
        value: 'usuario'
      },
      {
        text: 'EMAIL',
        value: 'email'
      },
      {
        text: 'DATA DE INCLUSÃO',
        value: 'dtInclusao'
      },
      {
        text: 'DATA DE ALTERAÇÃO',
        value: 'dtAlteracao'
      },
      {
        text: 'REGRAS',
        value: 'regras'
      },
      {
        text: 'STATUS',
        value: 'status'
      },
      {
        text: 'AÇÕES',
        value: 'acoes'
      }
      ],
      lstUsuario: ListaUsuario
    }
  },
  watch: {
    seacrh: function (valor) {
      this.testerch = valor
    }
  }
}
</script>
