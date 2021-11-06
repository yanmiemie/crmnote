<template>
  <div v-if="currentTutorial" class="">
    <a class="text-3xl py-2 "> 詞彙說明 </a>
    <form>
      <!--<div class="form-group">
        
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.word_tayal"
        />
      </div>

      <div class="form-group">
        
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.word_zh_tw"
        />
      </div>

      <div class="form-group">
       
         <input
          type="text"
          class="form-control"
          id="description"
           
        />-->

        <!-- label="泰雅文"
            hint="請使用羅馬拼音紀錄，泰雅雯" -->
      <div class="">

        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.spell_tayal"
        />
        
        <label for="title">泰雅文</label>
          <v-text-field 
            solo
            clearable
            v-model="currentTutorial.spell_tayal"
          ></v-text-field>
        <label for="description">中文</label>
          <v-text-field 
            solo
            clearable
            v-model="currentTutorial.spell_zh_tw"
          ></v-text-field>

        <label for="description">細節描述</label>
          <v-text-field 
            solo
            clearable
            v-model="currentTutorial.description"
          ></v-text-field>
      </div>

      
<!--  前置 的 圖像標示  prepend-icon="mdi-calendar" -->
      <div class="form-group">
              <v-combobox
                    v-model="currentTutorial.season"
                    multiple
                    chips
                    small-chips
                    label="泰雅時序"
                    
                    readonly
                    v-bind="attrs"
                    v-on="on"
              ></v-combobox>
      </div>


      <div class="form-group">
        <!-- <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.topic"
        /> -->

        <v-combobox
                    v-model="currentTutorial.topic"
                    multiple
                    chips
                    small-chips
                    label="課程主題" 
                    readonly
                    v-bind="attrs"
                    v-on="on"
              ></v-combobox>
      </div>

   



<!-- 
<v-date-picker
              v-model="tutorial.date_mor"
              multiple
            ></v-date-picker>

             
 -->


    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      刪除
    </button>

    <button type="submit" class="m-3 btn btn-sm btn-danger" @click="updateTutorial">
      更新
    </button>
      
    
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please 確認 on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/WordDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          // this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {  
        spell_tayal: this.currentTutorial.spell_tayal,
        spell_zh_tw: this.currentTutorial.spell_zh_tw,
        description: this.currentTutorial.description,
        topic: this.currentTutorial.topic,
        season: this.currentTutorial.season, 
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
