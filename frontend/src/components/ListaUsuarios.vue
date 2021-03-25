<template>
<v-card>
    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="lstUsuario" :search="search"></v-data-table>
</v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
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
      lstUsuario: [{
        usuario: 'Frozen Yogurt',
        email: 159,
        dtInclusao: 6.0,
        dtAlteracao: 24,
        regras: 4.0,
        status: '1%',
        acoes: '...'
      },
      {
        usuario: 'Frozen Yogurt',
        email: 159,
        dtInclusao: 6.0,
        dtAlteracao: 24,
        regras: 4.0,
        status: '1%',
        acoes: '...'
      },
      {
        usuario: 'Frozen Yogurt',
        email: 159,
        dtInclusao: 6.0,
        dtAlteracao: 24,
        regras: 4.0,
        status: '1%',
        acoes: '...'
      },
      {
        usuario: 'Frozen Yogurt',
        email: 159,
        dtInclusao: 6.0,
        dtAlteracao: 24,
        regras: 4.0,
        status: '1%',
        acoes: '...'
      }
      ]
    }
  }
}
</script>
