<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>NahuyMatuy</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn class = "text-red-500" >
          <router-link to="/add" >增加項目</router-link>
        </v-btn> 
        <v-btn flat>
          <router-link to="/cardDisplay">總覽</router-link>
        </v-btn> 
        <v-btn flat>
          <router-link to="/v3">v3</router-link>
        </v-btn> 
        <v-btn flat>
          <router-link to="/v4">v4 </router-link>
        </v-btn> 
        <v-btn flat>
          <router-link to="/v5">v5</router-link>
        </v-btn> 

           <!-- <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="300"
        max-width="500"
        src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->

        <!-- 正常加载 --> 
    <!-- <v-img
        lazy-src="" 
        src="src/assets/nmWebTitle_V1.png"
        alt=""
        > -->

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->

      
    </v-navigation-drawer>

    <v-main class="grey lighten-2">

    <v-content> 
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-content>

      <!-- <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container> -->
    </v-main>  
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>