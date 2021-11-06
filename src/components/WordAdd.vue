<template>
  <div class="submit-form">
    <div v-if="!submitted"> 
 
      <div class="form-group my-2">
        <label for="spell_zh_tw">漢語_拼音</label>
        <input
          class="form-control"
          id="spell_zh_tw"
          required
          v-model="word.spell_zh_tw"
          name="spell_zh_tw"
        />
      </div>

      <div class="form-group my-2">
        <label for="spell_tayal">泰雅語_拼音</label>
        <input
          class="form-control"
          id="spell_tayal"
          required
          v-model="word.spell_tayal"
          name="spell_tayal"
        />
      </div>

      <div class="form-group my-2">
        <label for="description">描述</label>
        <textarea
          class="form-control"
          id="description"
          rows="4" cols="50"
          required
          v-model="word.description"
          name="description"
        />
      </div>


      <!-- <div class="form-group my-2">
        <label for="season">泰雅時序</label>
        <input
          class="form-control"
          id="season"
          required
          v-model="word.season"
          name="season"
        />
      </div> -->
      <div class="form-group my-2">
        <label for="season">泰雅時序</label>
          <v-container fluid> 
                <v-select
                  v-model="word.season"
                  :items="season_states"
                  label="請選擇"
                  multiple
                  chips
                  hint="這是一個測試選項"
                  persistent-hint
                ></v-select> 
          </v-container> 
      </div>

      <!-- <v-container fluid> 
            <v-select
              v-model="e7"
              :items="states"
              label="請選擇"
              multiple
              chips
              hint="這是一個測試選項"
              persistent-hint
            ></v-select> 
      </v-container> -->

      <div class="form-group my-2">
        <label for="topic">課程主題</label>
        <v-container fluid> 
                <v-select
                  v-model="word.topic"
                  :items="topic_states"
                  label="請選擇"
                  multiple
                  chips
                  hint="這是一個測試選項"
                  persistent-hint
                ></v-select> 
          </v-container> 
      </div>

      <!-- <div class="form-group my-2">
        <label for="topic">相關教案列舉</label>
        <input
          class="form-control"
          id="topic"
          required
          v-model="word.topic"
          name="topic"
        />
      </div> -->

      
      
      <!-- # - - - - - - - # -->
      
      <!-- <v-row justify="center">
        <v-date-picker v-model="tutorial.date_s"></v-date-picker>
      </v-row> -->

      <!-- # - - - - - - - # --> 

      <button 
          @click="saveWord" 
           class="btn btn-success my-2"
           
           > 儲存 des</button>

           <!-- <button 
          @click="saveTutorial" 
           class="btn btn-success my-2"
           
           >儲存 des</button> -->
    </div>

    

    <div v-else>
      <h4>資料已新增成功!</h4>
          <button class="btn btn-success" @click="newTutorial">再新增一筆</button>
          <v-btn flat class="mx-2">
            <router-link to="/WordList">詞語列表</router-link>
          </v-btn> 
    </div>
  </div>
</template> 

<script>
import TutorialDataService from "../services/TutorialDataService"; 
import WordDataService from "../services/WordDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
        e6: [],
        e7: [],
        season_states:['s1', 's2', 's3', 's4',],
        topic_states:['t00', 't01', 't02', 't03', 't04','t05', 't06', 't07', 't08', 't09', 't10', 't11', 't13', 't14', 't15', 't16',],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],

       word: {  
        spell_tayal: "",
        spell_zh_tw: "",  
        season: "",
        topic:"",
        description: "", 
      },


      tutorial: {
        title: "",
        description: "",
        date_s:"",
        date_mor:[],
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        date_s: this.tutorial.date_s,
        date_mor:this.tutorial.date_mor,
        published: false
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    saveWord() {
        var data = {
          spell_tayal: this.word.spell_tayal,
          spell_zh_tw: this.word.spell_zh_tw,
          topic: this.word.topic,
          season: this.word.season,
          description: this.word.description,
        };

        WordDataService.create(data)
          .then(() => {
            console.log("新增成功!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
