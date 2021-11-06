<template>
  <div class="list row">
    <div class="col-md-8">
      <!-- <h4> 列表 </h4> -->
      <a class="text-3xl py-2 "> 詞彙 列表 </a> 

      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.description }} , 
          {{ tutorial.spell_tayal }} ,
          {{ tutorial.spell_zh_tw }} ,
          <!-- {{ tutorial.description }} -->

          {{ tutorial.semester }} , 
          {{ tutorial.season }} ,
          {{ tutorial.topic }} 


          
        </li>
      </ul>

      

<!-- <template v-slot:activator="{ on, attrs }">
              <v-combobox
                v-model="tutorial.date_mor"
                multiple
                chips
                small-chips
                label="Multiple picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-combobox>
            </template> -->



      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-4">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import WordDataService from "../services/WordDataService";
import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  },
  methods: {
      onDataChange(items) {
        let _tutorials = [];

        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key, 
            spell_tayal  : data.spell_tayal,
            spell_zh_tw  : data.spell_zh_tw, 
            description : data.description,
            season      : data.season,
            topic       : data.topic,

          // {{ tutorial.spell_tayal }}
          // {{ tutorial.spell_zh_tw }}  
          // <!-- {{ tutorial.description }} -->
          // {{ tutorial.season }}
          // {{ tutorial.topic }}


            // title: data.title,
            // published: data.published,
          });
        });

        this.tutorials = _tutorials;
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
        WordDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
  },
  mounted() {
    WordDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    WordDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
 
 
 <!--
 <template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Word List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(word, index) in words"
          :key="index"
          @click="setActiveWord(word, index)"
        >
          {{ word.spell_tayal }}
          {{ word.spell_zh_tw }}  
          {{ word.description }}
          {{ word.season }}
          {{ word.topic }}
          
        </li>
      </ul>

      

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllWords">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentWord">
        <word-details
          :word="currentWord"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Word...</p>
      </div>
    </div>
  </div>
</template>

<script>
import WordDataService from "../services/WordDataService";
import WordDetails from "./Word";

export default {
  name: "tutorials-list",
  components: { WordDetails },
  data() {
    return {
      words: [],
      currentWord: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _words = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _words.push({
          key: key,
          spell_tayal: data.spell_tayal,
          spell_zh_tw: data.spell_zh_tw,
          description: data.description,
          season     : data.season,
          topic      : data.topic,
        });
      });

      this.words = _words;
    },

    refreshList() {
      this.currentWord = null;
      this.currentIndex = -1;
    },

    setActiveWord(word, index) {
      this.currentWord = word;
      this.currentIndex = index;
    },

    removeAllWords() {
      WordDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    WordDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    WordDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style> -->
