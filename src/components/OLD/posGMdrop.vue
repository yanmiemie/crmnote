<template>

<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <v-flex xs4 class="elevation-1 pa-3 ma-2">
            <v-list two-line>
              <v-subheader>
                FIRST LIST
              </v-subheader>
              <draggable v-model="items" :options="{group:'people'}" style="min-height: 10px">
                <template v-for="item in items">
              <v-list-tile :key="item.id" avatar>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
              </draggable>
            </v-list>
          </v-flex>


          <v-flex xs4 class="elevation-1 pa-3 ma-2">
            <v-list two-line>
              <v-subheader>
                SECOND LIST
              </v-subheader>
              <draggable v-model="items2" :options="{group:'people'}" style="min-height: 10px">
                <template v-for="item in items2">
              <v-list-tile :key="item.id" avatar>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
              </draggable>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>

</template>

<script>
import TutorialDataService from "../services/TutorialDataService"; 
import WordDataService from "../services/WordDataService";
import PayMentSettingDataService from "../services/PayMentSettingDataService";
import draggable from "@/vuedraggable";

export default {
  name: "add-tutorial",
  data() {
    return {
        items: [
        {
          id: 1,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg",
          title: "Brunch this life?",
          subtitle: "Subtitle 1"
        },
        {
          id: 2,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg",
          title: "Winter Lunch",
          subtitle: "Subtitle 2"
        },
        {
          id: 3,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg",
          title: "Oui oui",
          subtitle: "Subtitle 3"
        }
      ],
      items2: [
        {
          id: 4,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/4.jpg",
          title: "Brunch this weekend?",
          subtitle: "Subtitle 4"
        },
        {
          id: 5,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/5.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "Subtitle 5"
        }
      ],

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
 