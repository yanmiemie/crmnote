<template>
  <div class=" ">
    <div v-if="!submitted">


  <div class="grid gap-x-2 grid-cols-4 mx-1">
        <div class="col-span-2 ">
          <v-text-field
            v-model="tutorial.title"
            label="姓名"
            outlined 

            solo
          ></v-text-field>  
        </div>

        <div class="row-span-1 col-span-2 " >  
          <v-text-field
            v-model="tutorial.pay"
            label="金額"
            outlined 

            solo
          ></v-text-field>  

          <!-- <v-checkbox 
            class=" fw-bolder"
            v-model="tutorial.charged"
            :label="`月卡方案`"
          ></v-checkbox>

          <v-checkbox
          class="fw-bolder "
            v-model="tutorial.ts_charged"
            :label="`運費減免`"
          ></v-checkbox>

          <v-checkbox
          class="fw-bolder"
            v-model="tutorial.food_charged"
            :label="`待收費`"
          ></v-checkbox>  -->
        </div>

        <div class="col-span-2 " >  
           
          
        </div>

        <div class="col-span-4" >  
          <v-text-field
            v-model="tutorial.description2"
            label="算法公式"
            outlined 

            solo
          ></v-text-field>  

          <v-text-field
            v-model="tutorial.description1"
            label="備註"
            outlined 

            solo
          ></v-text-field> 
          
        </div>
        <div class="col-span-4"
        ><v-date-picker
              id="dp1" 
              v-model="tutorial.bk_date1"
              :first-day-of-week="1"
              :show-current="false"  
              :show-adjacent-months="false"
              multiple
              elevation="15"
              width="full"
            ></v-date-picker>
            
            
      </div>

      <div class="col-span-4">
        <v-date-picker
              id="dp2" 
              v-model="tutorial.bk_date2"
              :first-day-of-week="1"
              :show-current="false"  
              multiple 
              elevation="15"
              width="full" 
              scrollable="true"
            ></v-date-picker>
            </div>
      </div> 
 
 

      <button @click="saveTutorial" 
               class="item-center btn btn-danger m-5"> 登記 </button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        title: "",
        description: "",
        bk_date:[],
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
        bk_date1: this.tutorial.bk_date1,
        bk_date2: this.tutorial.bk_date2,
        charged:this.tutorial.charged,
        // address:this.tutorial.address,
        
        
        
        // landmark:this.tutorial.landmark,
        published: true

        // mb_name: this.tutorial.mb_name,
        // mb_type: this.tutorial.mb_type,
        // mb_bill: this.tutorial.mb_bill,
        // mb_bkdate: this.tutorial.mb_bkdate,
        // memo: this.tutorial.memo,
        // published: true
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
