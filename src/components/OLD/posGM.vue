
<template>
    
          <div class="submit-form">
            <div v-if="!submitted"> 
              
<v-form>
      <v-container > 
 <div class=" grid grid-cols-3 gap-2  ">
<v-card solo>

  <v-card-title>北北東</v-card-title>
  <v-divider></v-divider>
 <a class=" text-3xl "> {{  pos_1_ply.box2 + pos_1_ply.box3 + pos_1_ply.box4 + pos_1_ply.box5  - pos_1_plyadTed}} / 24 
   </a>
</v-card>

 
      
   
<v-card solo>
<v-card-title>中央 </v-card-title>
  <v-divider></v-divider>
   <div class=" md:p-2 col-span-1">
    <strong> 
      <a class=" text-3xl "> {{  pos_2_ply.box1 + pos_2_ply.box2 + pos_2_ply.box3 + pos_2_ply.box4 + pos_2_ply.box5 + pos_2_ply.box6 - pos_2_plyadTed}} / 36 
      </a></strong> 
   </div>
   </v-card>

<v-card solo>
<v-card-title>南場 </v-card-title>
  <v-divider></v-divider>

   <div class=" md:p-2 col-span-1">
    <strong> 
      <a class=" text-3xl "> {{  pos_3_ply.box1 + pos_3_ply.box2 + pos_3_ply.box3 + pos_3_ply.box4 + pos_3_ply.box5 - pos_3_plyadTed}} / 22  
      </a></strong> 
   </div>

  </v-card>

  </div> 
      <v-tabs
        v-model="tab"
        background-color="primary"
        dark
      >
        <v-tab key='k1' href='#k1' v-if="!hide"> <v-icon color="white" >mdi-sword-cross  </v-icon>  <a> 北北東 </a></v-tab>
        <v-tab key='k2' href='#k2'><v-icon color="white" >mdi-gavel  </v-icon>  <a> 中央 </a></v-tab>
        <v-tab key='k3' href='#k3'><v-icon color="white" >mdi-heart-pulse  </v-icon>  <a> 南場 </a></v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item key='k1' value='k1'>
          
  <v-card color="blue-grey lighten-5" solo class="p-2" elevation="11" >

<p class=" text-center p-2  bg-gray-200 rounded-full "> 北北東-棚1: 安全講習 </p>
 
          <div class=" py-4 pt-7  col-span-1 flex"> 
            <a class="flex-1"> 北北東-棚2 </a>
              <v-slider
                v-model="pos_1_ply.box2 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <a class="flex-1"> 北北東-棚3 </a>
              <v-slider
                v-model="pos_1_ply.box3 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

         <div class=" py-4  col-span-1 flex"> 
            <a class="flex-1"> 北北東-棚4 </a>
              <v-slider
                v-model="pos_1_ply.box4 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <a class="flex-1"> 北北東-棚5 </a>
              <v-slider
                v-model="pos_1_ply.box5 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div> 

          </v-card>
          
        </v-tab-item>
        <v-tab-item key='k2' value='k2'>
          
          
            <v-card solo class="p-2" elevation="11" >

<!-- <p color="" class=" text-center p-2  bg-gray-200 rounded-full "> 北北東-棚1: 安全講習 </p> -->
 
  <div class=" grid grid-cols- gap-2  ">
    <div class=" col-span-1  ">
  <p class="text-center font-weight-bold">
     中央棚區 ： {{  pos_2_ply.box1 + pos_2_ply.box2 + pos_2_ply.box3 + pos_2_ply.box4 + pos_2_ply.box5 + pos_2_ply.box6 - pos_1_plyadTed}} / 36 
   </p>
   </div>
   <div class=" col-span-1  ">
    <v-text-field
      v-model="pos_1_plyadTed"
      type="number"
      min = 0
      max = 60 
      value= 0
      label="(加時．預留數量)">
      hint="請巡場註記"
      solo
    </v-text-field>
    </div>
 
 </div>
 <br>
           <div class=" py-4 pt-4  col-span-1 flex"> 
            <p class="flex-1 text-red-300 "> 中央棚 <1> </p>
              <v-slider
                v-model="pos_2_ply.box1 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4 pt-7  col-span-1 flex"> 
           <p class="flex-1 text-red-300 "> 中央棚 <2> </p>
              <v-slider
                v-model="pos_2_ply.box2 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-red-300 "> 中央棚 <3> </p>
              <v-slider
                v-model="pos_2_ply.box3 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

         <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-red-300 "> 中央棚 <4> </p>
              <v-slider
                v-model="pos_2_ply.box4 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-red-300 "> 中央棚 <5> </p>
              <v-slider
                v-model="pos_2_ply.box5 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div> 

          <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-red-300 "> 中央棚 <6> </p>
              <v-slider
                v-model="pos_2_ply.box6 "
                color=red
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          </v-card>

        </v-tab-item>
        <v-tab-item key='k3' value='k3'>
          
          
            <v-card solo color="indigo lighten-5" class="p-2 bg-red-300">

<!-- <p class=" text-center p-2  bg-gray-200 rounded-full "> 南場-棚1: 安全講習 </p> -->
 
 <p class="text-center pt-7 font-weight-bold">
     南場 </p>

     

           <div class=" py-4 pt-7  col-span-1 flex"> 
            <!-- <a class="flex-1"> 南場-棚1 </a> -->
            <p class="flex-1 text-green-600 "> 南場-棚1 </p>
              <v-slider
               color=green
                v-model="pos_3_ply.box1 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4 pt-7  col-span-1 flex"> 
            <p class="flex-1 text-green-600 "> 南場-棚2 </p>
              <v-slider
              color=green
                v-model="pos_3_ply.box2 "
                class="align-center  w-3/5 "
                always-dirty
                :max=4
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-green-600 "> 南場-棚3 </p>
              <v-slider
                color=green
                v-model="pos_3_ply.box3 "
                class="align-center  w-3/5 "
                always-dirty
                :max=4
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

         <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-green-600 "> 南場-棚4 </p>
              <v-slider
                color=green
                v-model="pos_3_ply.box4 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div>

          <div class=" py-4  col-span-1 flex"> 
            <p class="flex-1 text-green-600 "> 南場-棚5 </p>
              <v-slider
                color=green
                v-model="pos_3_ply.box5 "
                class="align-center  w-3/5 "
                always-dirty
                :max=6
                :min=0
                thumb-label="always"
                step=1
              ></v-slider>
          </div> 

          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

        

           <!-- {{pos_3_ply.box5 + pos_3_ply.box4 + pos_3_ply.box3 + pos_3_ply.box2}} -->
   
   

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
slider: 2,
ttp: 0,
pos_1_plyadTed:0,
pos_2_plyadTed:0,
pos_3_plyadTed:0,
      pos_1_ply:
        [{ 
          box1:0,
          box2:0,
          box3:0,
          box4:0,
          box5:0,
          adTed:0, 
        }],
      pos_2_ply:
        [{ 
          box1:0,
          box2:0,
          box3:0,
          box4:0,
          box5:0, 
          box6:0,
        }],
      pos_3_ply:
        [{ 
          box1:0,
          box2:0,
          box3:0,
          box4:0,
          box5:0, 
        }],



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
      show: '1',


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
          
           tab: 'k3',
      hide: false ,// You can hide tab1 by setting to true
gg:0,
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
 next () {
      const active = parseInt(this.show);
      this.show = (active < 2 ? active + 1 : 0).toString();
    },
    cnttp(){
      let x = 0 ;
      console.log(pos_1_ply.box2);
      x = this.pos_1_ply.box2.length  +
          this.pos_1_ply.box3.length  +
          this.pos_1_ply.box4.length  +
          this.pos_1_ply.box5.length 
        this.ttp =x;

        
    },

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

<!--           
          <div class=" py-2 col-span-1">
            <a class="px-4"> 北北東-棚2 </a>
              <v-btn-toggle
                v-model="pos_3_ply.box2"
                multiple
                @click="cnttp"
              >
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                
              </v-btn-toggle>
          </div>

          <div class=" py-2 col-span-1">
            <a class="px-4"> 北北東-棚3 </a>
              <v-btn-toggle
                v-model="pos_3_ply.box3"
                multiple
                v
              >
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                
              </v-btn-toggle>
          </div>

          <div class=" py-2 col-span-1">
            <a class="px-4"> 北北東-棚4 </a>
              <v-btn-toggle
                v-model="pos_3_ply.box4"
                multiple 
                @click="savePMN"
              >
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                
              </v-btn-toggle>
          </div>

          <div class=" py-2 col-span-1">
            <a class=" px-4"> 北北東-棚5 </a>
              <v-btn-toggle
                v-model="pos_3_ply.box5"
                multiple
                @click="cnttp"
              >
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn>
                <v-btn> <v-icon>mdi-flag-variant</v-icon> </v-btn> 
                
              </v-btn-toggle>
          </div> -->
 