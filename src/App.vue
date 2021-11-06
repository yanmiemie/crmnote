<template>
  <v-app>
     
        <v-toolbar flat> 

          <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-sword-cross</v-icon> 
            <router-link to="/posGM_0" class="text-white">  靶位管理(2.0) </router-link>
          </v-btn>  

          <!-- <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-numeric-2-box-multiple-outline</v-icon> 
            <router-link to="/posGM" class="text-white">  靶位管理(1.0) </router-link>
          </v-btn>   -->

          <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-numeric-2-box-multiple-outline</v-icon> 
            <router-link to="/vvv" class="text-white">  vvv(1.0) </router-link>
          </v-btn>  

          <!-- <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-numeric-2-box-multiple-outline</v-icon> 
            <router-link to="/pd2" class="text-white">  pd(2.0) </router-link>
          </v-btn>  -->

         <!-- <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-numeric-2-box-multiple-outline</v-icon> 
            <router-link to="/drag" class="text-white">  drag(1.0) </router-link>
          </v-btn>   -->

          <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-numeric-2-box-multiple-outline</v-icon> 
            <router-link to="/printa" class="text-white">  列印測試(1.0) </router-link>
          </v-btn>  

           <v-btn href="http://havetofun.com:8080/fill_bas4.aspx?st_no=ST001&st_name=%E8%A5%BF%E6%B9%96%E4%B8%80" 
                 class=" text-red-100 bg-gary-900"
                 color="secondary"
                 elevation="6"
                 > 投影互動(預約) </v-btn > 
 
          <v-btn href="https://hackmd.io/@SoonZ/empysop"
                 class=" text-red-100 bg-gary-900 xl:mx-2 "
                 color="secondary"
                 elevation="6" 
                 >SOP 指南手冊 </v-btn>
         
          </v-toolbar>
          <v-toolbar flat>  

          <v-btn color="red" flat class="xl:mx-9 flex ">
              <v-icon color="white" >mdi-plus-circle</v-icon> 
            <router-link to="/PMNAdd" class="text-white">  新增收費 </router-link>
          </v-btn> 



          <v-btn flat class="xl:mx-2 flex ">
             <router-link to="/PMNList">  當班收費 紀錄 </router-link>
          </v-btn> 
          
          

          <v-btn flat  class="xl:mx-2 flex ">
              <router-link to="/PMSList"> 
                <v-icon>mdi-dots-vertical</v-icon>
                <!-- 收費設定 -->
              </router-link>
          </v-btn> 

          <!-- <v-btn flat class="mx-3" >
            <v-icon>mdi-magnify</v-icon> 
            <a>文化素養</a>
          </v-btn>

          <v-btn flat class="mx-3"> 
            <v-icon>mdi-apps</v-icon> 
            <a>近期課表</a>
          </v-btn> --> 
          <!-- <v-btn icon class="mx-3">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
        </v-toolbar> 
            
         

      <v-content class="mt-6"> 
         <router-view/> 
      </v-content>
  </v-app>

  
</template>