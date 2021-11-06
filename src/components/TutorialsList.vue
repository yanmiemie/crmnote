<template>
  <div class="list row">
    
    
    <div class="col-md-2">
      <h4>旅途 列表</h4>
      <ul class="list-group">


        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
 
        <!-- <v-date-picker
              v-model="tutorial.date_mor"
              multiple
              no-title
              scrollable
            > 
        </v-date-picker> -->
             
          
        </li> 
      </ul>

        

         <v-container fluid> 
                <v-select 
                  :items="season_states"
                  label="請選擇"
                  multiple
                  chips
                  hint="這是一個測試選項"
                  persistent-hint
                ></v-select> 
          </v-container> 

 
        <v-container fluid> 
                <v-select 
                  :items="FVB"
                  label="HashTag"
                  multiple
                  chips
                  hint="請選一個 基本設置"
                  persistent-hint
                ></v-select> 
          </v-container>  

<button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        增加一個數
      </button>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        移除所有資料
      </button>
    </div>
    <div class="col-md-8">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please 確認 on a Tutorial...</p>
      </div>
    </div>
<hr>
 

  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import TutorialDetails from "./TutorialMdf";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return { 
      FVB:[],
      tempp: [], 
      season_states2:[{"description":"我都不知道"},{"description":"這是測試 3"}],
      season_states:['s1', 's2', 's3', 's4',],
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
    onDataChange(items) {
       
      let _tutorials = [];
      let _tu = [];
      let _tu_dtl2 = [];


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
          date_s:data.date_s,
          date_mor:data.date_mor,
        });
      });

    //  ::  藉由使用  ::
    var temp_ary = _tutorials.map(function(item, index, array){ 
        if (item.description !== '') {
              return item.description;
            }  
      }) ; 
    this.FVB = temp_ary ;
    console.log('- - - < temp_ary > - - -');  
    console.log(temp_ary);  
 
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    
  },
  mounted() {
    // console.log(_tutorials.title);  
    TutorialDataService.getAll().on("value", this.onDataChange);
    

    
  },
  beforeDestroy() {
    TutorialDataService.getAll().off("value", this.onDataChange);
  }, 

    
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
