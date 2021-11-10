<template>
  <v-app>
     
        <v-toolbar flat>  

          <v-btn color="bg-dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " flat class="mx-3 ">
              <v-icon color="white" >mdi-clipboard-edit-outline</v-icon> 
            <router-link to="/add" class="text-white">  登記 </router-link>
          </v-btn>    

          <v-btn color="bg-dark " flat class="mx-3 ">
              <v-icon color="white" >mdi-playlist-edit</v-icon> 
            <router-link to="/" class="text-white">  列表 </router-link>
          </v-btn>  

        </v-toolbar>  
             
      <v-content class="mt-6"> 
         <router-view/> 
      </v-content>
  </v-app>

  
</template>