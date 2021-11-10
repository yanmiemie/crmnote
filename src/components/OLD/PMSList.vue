<template>
  <div class="list row">
    <div class="col-md-8">
      <!-- <h4> 列表 </h4> -->
      <a class="text-3xl py-2 "> 目前收費設定 </a> 
      <v-btn flat class="mx-2">
        <router-link to="/PMSAdd">新增項目 </router-link>
      </v-btn> 
      
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.name }} , 
          {{ tutorial.note }} , 
          {{ tutorial.price }} ,   
          {{ tutorial.type }} ,  
          {{ tutorial.status }} ,  
        </li>
      </ul>

      
 

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        千萬不要按
      </button> -->
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
        <p>請點選項目進行 查核</p>
      </div>
    </div>
  </div>
</template>

<script>
import PayMentSettingDataService from "../services/PayMentSettingDataService";
import TutorialDetails from "./PMSMdf"; // 連接至 Mdf 的部分

export default {
  name: "PayMentSetting-list",
  components: { TutorialDetails },
  data() {
    return {
      Moneyflow:['現金','線上刷','抵用券','其他'],
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
            name    : data.name,
            note    : data.note,  
            price   : data.price,
            status  : data.status,
            type    : data.type, 
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

      // removeAllTutorials() {
      //   WordDataService.deleteAll()
      //     .then(() => {
      //       this.refreshList();
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // },
  },
  mounted() {
    PayMentSettingDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    PayMentSettingDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 950px;
  margin: auto;
}
</style>
 
  