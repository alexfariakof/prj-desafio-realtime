<template>
<div class="appBody">
  <v-app>
     <v-app-bar app class="appHeader"  >
      <div class="d-flex align-center">
        <v-img alt="Realtime Logo" class="shrink mr-2 logo" contain :src="require('@/assets/symbol.svg')" transition="scale-transition" width="80" height="60"   />
        <p class="d-flex align-center divisor">|</p>
        <v-btn class="d-flex align-center boxSecurity" >
          <v-img  alt="Security" contain :src="require('@/assets/security.png')" transition="scale-transition" width="20" height="20" />
        </v-btn>
        <v-btn class="d-flex align-center boxPerson" >
          <v-img alt="Person" contain :src="require('@/assets/person.png')"  transition="scale-transition" width="20" height="20" />
        </v-btn>
      </div>
      <div >
         <v-text-field class="textPesquisa" v-model="vPesquisa" append-icon="mdi-magnify" label="Pesquisar..." single-line hide-details></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <div >
        <FilterSideBar/>
      </div >
      <div >
        <v-btn  href="" target="_blank"  text class="btnIncluirUsuario" >
          <v-img  alt="Person" class="shrink mr-2 imgBtnUsuario" contain :src="require('@/assets/person.png')" transition="scale-transition" width="20" height="20"  />
          <span class="mr-2 textBtnUsuario" >INCLUIR USUÁRIO</span>
        </v-btn>
      </div>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class=""  contain :src="require('@/assets/home.png')" transition="scale-transition" width="24" height="24"  />
      </v-btn>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class="" contain :src="require('@/assets/settings.png')" transition="scale-transition" width="24" height="24" />
      </v-btn>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class="" contain :src="require('@/assets/power.png')" transition="scale-transition"  width="24" height="24" />
      </v-btn>
    </v-app-bar>
     <v-main>
      <ListaUsuarios v-bind:search="vPesquisa" />
    </v-main>
      <Footer class="appFooter" />
  </v-app>
</div>
</template>

<script>
import ListaUsuarios from './components/ListaUsuarios'
import FilterSideBar from './components/FilterSideBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    ListaUsuarios,
    FilterSideBar,
    Footer
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
.appBody{
  height: auto;
  margin: 0;
  border: 0;
  padding: 0;
  background-color: rgb(19, 19, 27);
}
.appHeader{
  height: 96px;
}
.appFooter{
  width: 100%;
  height:  47px;
  background-color: #333333;
}
.logo{
  width:56px;
  height:37.3px;
  margin-left: 41.63px;
  margin-right: 20.5px;
}
.divisor{
  margin-right: 40px;
  align-items: center;
}
.boxSecurity{
  width: 52px;
  height:48px;
  align-content: center;
  border-radius: 4px;
}
.boxPerson{
  width: 52px;
  height:48px;
  background-image: linear-gradient(224.78317304448626deg, #FF8700, #D83367);
  border-radius: 4px;
}
.textPesquisa{
  width: 298px;
  height: 30px;
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #333333;
  background-color:#FFFFFF;
  margin-left: 40px;
  padding-top: 4px;
  padding-bottom: 16px
}
.imgPesquisa{
  float: right;
  width: 24px;
  height: 24px;
}
.btnIncluirUsuario{
  width: 200px;
  height: 48px;
  border-radius: 4px;
  background-color:#D83367;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color:#FFFFFF;
  padding-left: 16px;
}
.imgBtnUsuario{
  margin-left: 16px;
}
.textBtnUsuario{
  margin-right: 16px;
}
</style>
