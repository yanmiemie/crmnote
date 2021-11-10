<template>
    
          <div class="submit-form">
            <div v-if="!submitted"> 
              
<v-form>
      <v-container > 


<div class="md:grid grid-cols-2   ">
   <div class=" md:px-2 col-span-1">
     
    <strong> 北北東目前人數：</strong>
 
{{ pos_1ttP[0].cntPlayer + pos_1ttP[1].cntPlayer +
   pos_1ttP[2].cntPlayer + pos_1ttP[3].cntPlayer +
   pos_1ttP[4].cntPlayer + pos_1ttP[5].cntPlayer }}
  <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[0].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[1].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[2].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[3].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[4].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

  <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_1ttP[5].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

 
   </div> 

   <div class=" md:px-2 col-span-1"> 
    <strong> 中央目前人數：</strong>
 
{{ pos_2ttP[0].cntPlayer + pos_2ttP[1].cntPlayer +
   pos_2ttP[2].cntPlayer + pos_2ttP[3].cntPlayer +
   pos_2ttP[4].cntPlayer + pos_2ttP[5].cntPlayer }}


<v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[0].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[1].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[2].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[3].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

      <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[4].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

  <v-card class="my-2"> 
    <div class="md:grid grid-cols-4 gapx-2 "> 
      <div class=" md:px-2 col-span-1 ">
          <v-text-field   
            label="顧客代稱"
            solos
            clearable 
          ></v-text-field>   
        </div>

        <div class=" md:px-2 col-span-1 ">
          <v-select 
            v-model="pos_2ttP[5].cntPlayer"
            :items="cntPeoepe" 
            label="使用人數" 
            filled
            persistent-hint  
          ></v-select>   
        </div>   

        <v-select 
          :items="onlineRound" 
          label="入場次別" 
          chips 
          persistent-hint  
        ></v-select>  

        <v-select 
          :items="onlineRound" 
          label="加時狀況"  
          chips 
          multiple
          persistent-hint  
        ></v-select>   
      </div>       
    </v-card> 

   </div>
</div> 
 

                </v-container> 
              </v-form>  
            </div> 
            <div v-else>
              <h4>資料已新增成功!</h4>
                  <button class="btn btn-success" @click="newPMS">再新增一筆</button>
                  <v-btn flat class="mx-2">
                    <router-link to="/PMSList">已設定列表</router-link>
                  </v-btn> 
            </div>
          </div>
</template> 

<script>
import TutorialDataService from "../services/TutorialDataService"; 
import WordDataService from "../services/WordDataService";
import PayMentSettingDataService from "../services/PayMentSettingDataService";
export default {
  name: "add-tutorial",
  data() {
    return {

      pos_1ttP:[
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
      ],
      pos_2ttP:[
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
        { 
          name:"",
          cntPlayer:0,
          posHere:"",
          inT:"",
          addT:""
        },
      ],
      pos_3ttP:[],
      


posType:['北北東','中央','南場','南場(頭)','中央(尾)','其他'],  
distance:['5米','10米','15米','30米','50米','70米','90米','其他'],
cntPeoepe:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],

onlineRound:['06:00~','07:00~','08:00~','09:00~','10:00~','11:00~','12:00~',
        '13:00~','14:00~','15:00~','16:00~','17:00~','18:00~',
        '19:00~','20:00~','21:00~','22:00~','其他'],


        systime: new Date(Date.now()),
        chkinTime: null,
        menu2: false,
        modal2: false,
        activePicker: null,
        date: null,
        menu: false,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
         
        e6: [],
        Moneyflow:['現金','線上刷','抵用券','其他'],
        BasicType:['會員類別','顧客輪廓','接駁費用','弓具費用','加時費用','場地費用','會員類別','付款方式','會員點數','其他','特殊折價'],
          

      PMS:{
          name:"",
          note:"", 
          type:"",
          mdfdate:"",
          Ragicidx:"",
          status: false
        },  
      submitted: false
    };
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
  },
  methods: { 

      savePMS() { 
        var data = { 
          name: this.PMS.name, 
          note: this.PMS.note,
          type: this.PMS.type, 
          status: true
        };

        PayMentSettingDataService.create(data)
          .then(() => {
            console.log("新增成功!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

    newPMS() { 
      this.submitted = false;
      this.tutorial = { 
        name: "",
        note: "",
        type: "",
        status: false
      };
    },
    saveDate (date) {
        this.$refs.menu.save(date)
      },
  }
};
</script>

<style>
.submit-form {
  max-width: 95%;
  margin: auto;
}
</style>
