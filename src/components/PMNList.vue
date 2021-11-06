<template>
  <div class="list row">
    <div class="col-md-8">
      <!-- <h4> 列表 </h4> -->
      <a class="text-3xl py-2 "> 日常收費紀錄 </a> 
<v-btn flat class="mx-2">
        <router-link to="/PMNAdd">新增收費 </router-link>
      </v-btn> 
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        > 
          {{ tutorial.userName }} , 
          {{ tutorial.input_money }} ,  
          <!-- {{ tutorial.type }} , -->  
          {{ tutorial.status }} ,  
        </li>
      </ul>
<strong> 當下累積金額：</strong>
      {{ nowMoney }}

      
 

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
        <p> 點選 消費紀錄 修改...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PayMentNoteDataService from "../services/PayMentNoteDataService";
import TutorialDetails from "./PMNMdf"; // 連接至 Mdf 的部分

export default {
  name: "PayMentNote-list",
  components: { TutorialDetails },
  data() {
    return {
      nowMoney:0,
      Moneyflow:['現金','線上刷','抵用券','其他'],
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  },
  methods: {
      onDataChange(items) {
        let _tutorials = [];
        let _nowMoney = 0;
        items.forEach((item) => {
          
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key, 
            userName       : data.userName,
            input_money    : data.input_money,  
            status  : data.status,
          }); 

          if( data.status == true)
          _nowMoney = parseInt(_nowMoney) + parseInt(data.input_money)
        }); 


           this.tutorials = _tutorials;

        this.nowMoney = _nowMoney;
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
    PayMentNoteDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    PayMentNoteDataService.getAll().off("value", this.onDataChange);
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
 
  