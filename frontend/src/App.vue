<template>
  <v-app>
    <v-app-bar
      app
      color="none"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Realtime Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/symbol.svg')"
          transition="scale-transition"
          width="56"
          height="37.3"
        />

      <v-divider vertical></v-divider>
      <div d-flex align-center style="width:52; height:48;"  >
             <v-img style="background-color:#FFFFFF"
          alt="Security"
          class="shrink mr-2"
          contain
          :src="require('@/assets/security.png')"
          transition="scale-transition"
          width="20"
          height="20"
        />

      </div>
      <div d-flex align-center style="width:52; height:48;">
             <v-img style="background-image: linear-gradient(224.78317304448626˚, #FF8700, #D83367);"
          alt="Person"
          class=""
          contain
          :src="require('@/assets/person.png')"
          transition="scale-transition"
          width="20"
          height="20"
        />
      </div>
      <input type="text" style="background-color:#FFFFFF" placeholder="Pesquisar..." />
      <v-img style="background-color:#FFFFFF"
          alt="Search"
          class=""
          contain
          :src="require('@/assets/search.png')"
          transition="scale-transition"
          width="20"
          height="20"
        />
      </div>
      <v-spacer></v-spacer>
      <div >
      <FilterSideBar/>
      </div >
      <div >
      <v-btn  href="" target="_blank"  text style="background-color:#D83367" >
        <v-img  alt="Person" class="shrink mr-2" contain :src="require('@/assets/person.png')" transition="scale-transition"  />
        <span class="mr-2">INCLUIR USUÁRIO</span>
      </v-btn>
      </div>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class=""  contain :src="require('@/assets/home.png')" transition="scale-transition"  />
      </v-btn>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class="" contain :src="require('@/assets/settings.png')" transition="scale-transition"  />
      </v-btn>

      <v-btn  href="" target="_blank"  text  >
        <span class="mr-2"></span>
        <v-img class="" contain :src="require('@/assets/power.png')" transition="scale-transition"  />
      </v-btn>
    </v-app-bar>

    <v-main>
      <ListaUsuarios/>
    </v-main>
    <Footer/>
  </v-app>
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
