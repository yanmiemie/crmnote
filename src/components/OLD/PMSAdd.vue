<template>
    
          <div class="submit-form">
            <div v-if="!submitted"> 
              
<v-form>
      <v-container > 
      <div class="xl:flex" >
        <div class="xl:flex-grow m-3   ">
               <strong>項目名稱：</strong>
               <v-text-field   
                  label="請填寫 名稱"
                  solo
                  clearable
                  v-model="PMS.name"
                ></v-text-field> 
          </div>
          <div class="xl:flex-grow m-3 ">
                <strong>銷售金額：</strong>
                <v-text-field
                  solo 
                  hint="請填銷售金額" 
                  min=0
                  type="number"   
                  step="any" 
                  v-model="PMS.price"
                ></v-text-field>
          </div>
          <div class="xl:flex-grow m-3  ">
                <!-- <strong>使用類別：</strong> -->
                <v-container fluid>
                  <v-select
                    v-model="PMS.type"
                    :items="BasicType"
                    label="設定 使用類別"  
                    persistent-hint
                  ></v-select>  
                </v-container>
          </div> 
        </div> 

        <div class="xl:flex" >
          <div class="xl:flex-grow m-3  ">     
                <v-text-field
                  solo 
                  label="Ragic 編碼設定"
                  hint="請輸入 與Ragic 相同的編碼"  
                  v-model="PMS.Ragicidx"
                ></v-text-field>
        </div>
          <div class="xl:flex-grow m-3  "> 
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            > 
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="點擊設定 預約日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="saveDate"
              ></v-date-picker>
            </v-menu> 
          </div> 
          <div class="xl:flex-grow m-3  ">
            <v-dialog
              ref="dialog" 
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="chkinTime"
                  label="點擊設定 登入時間"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  value=""
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="time"
                full-width
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal2 = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(time)"
                >
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </div> 

        </div>  
                <!-- <v-textarea
                  solo
                  name="input-7-4"
                  label="用途 註記"
                  v-model="PMS.note"
                ></v-textarea>  -->
                
<div class="xl:flex" > 
  <div class="xl:flex-grow m-3  ">
          <strong>使用狀況：</strong>
                  <v-btn-toggle
                    v-model="toggle_multiple"
                    tile
                    color="deep-purple accent-3" 
                  >
                    <v-btn>   使用中 </v-btn> 
                    <v-btn>   停用 </v-btn> 
                    <v-btn>   作廢 </v-btn> 
                    <v-btn>   尚在調整階段 </v-btn>
                  </v-btn-toggle>  
                  <!-- <v-spacer></v-spacer> -->
                  </div> 
                  <div class="xl:flex-grow m-3  ">
                    <button 
                      @click="savePMS" 
                      class="btn btn-success my-2 xl: w-100" 
                    >儲存紀錄</button> 
                    <a class="text-xs" > 開始編輯時間：  {{ systime }} </a>
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
  max-width: 70%;
  margin: auto;
}
</style>
