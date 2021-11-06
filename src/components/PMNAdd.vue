<template> 
  <div class="submit-form">
    <div v-if="!submitted">  
      <v-form>
        <v-container >  
          <strong>基本資料：</strong>
            <div class="md:grid grid-cols-5 gap-4">
                <div class="bg-gray-200 col-span-5 rounded-lg pt-3">
                  <div class="md:grid grid-cols-5 gap-2">
                    <div class=" md:p-2 ">
                        <v-text-field   
                          label="顧客姓名"
                          solo
                          clearable
                          prepend-inner-icon="mdi-creation"
                          v-model="pNote.bk_userName"
                        ></v-text-field>  
                    </div>  
                    <div class=" md:p-2 ">
                        <v-text-field   
                          label="顧客手機"
                          solo
                          clearable
                          prepend-inner-icon="mdi-phone"
                          v-model="pNote.bk_phoneNum"
                        ></v-text-field>  
                    </div>  
                    <div class=" md:p-2 ">
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
                            v-model="pNote.bk_Date"
                            label="預約日期"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            solo
                            disabled
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="pNote.bk_Date"
                          :active-picker.sync="activePicker"
                          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                          min="1950-01-01"
                          @change="saveDate"
                        ></v-date-picker>
                      </v-menu> 
                    </div> 
                    <div class=" md:p-2">
                      <v-select 
                        v-model="pNote.bk_Rd"
                        :items="onlineRound"
                        prepend-inner-icon="mdi-clipboard-check"
                        label="預約場次" 
                        solo
                        persistent-hint
                      ></v-select>
                    </div>   
                    <div class=" md:p-2 ">  
                      <v-text-field   
                        v-model="pNote.bk_memo"
                        label="訂購註記"
                        prepend-inner-icon=""
                        solo
                        clearable 
                      ></v-text-field>
                    </div>   
                    <div class=" md:p-2 ">   
                      <v-select  
                        v-model="pNote.bk_cxtmType"
                        :items="temp_mbrType"
                        prepend-inner-icon="mdi-account"
                        label="會員類別"
                        multiple
                        solo
                        persistent-hint
                      ></v-select> 
                    </div> 
                    <div class=" md:p-2 "> 
                      <v-select  
                        v-model="pNote.bk_gpType" 
                        :items="temp_cxtmType"
                        prepend-inner-icon="mdi-account"
                        label="顧客輪廓"
                        multiple
                        solo
                        persistent-hint
                      ></v-select>
                    </div> 
                    <div class=" md:p-2 "> 
                      <v-text-field   
                        v-model="pNote.safeID_Note"
                        label="保險填註記"
                        prepend-inner-icon="mdi-heart"
                        solo
                        clearable 
                      ></v-text-field>
                    </div> 

                    <div class=" md:p-2 col-span-1"> 
                        <v-select 
                        v-model="pNote.bk_Amt"
                        :items="cntPeoepe"
                        prepend-inner-icon="mdi-widgets"
                        label="入場人數" 
                        solo
                        persistent-hint
                      ></v-select>  
                    </div>  

                    <div class=" md:p-2  col-span-1">
                      <v-dialog 
                        ref="dialog" 
                        v-model="model"
                        :return-value.sync="time"
                        persistent
                        width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                          disabled
                            v-model="pNote.chkinTime"
                            label="報到時間"
                            prepend-inner-icon="mdi-clock-time-four-outline"
                            readonly
                            solo
                            value=""
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="modal2"
                          v-model="pNote.chkinTime"
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
                </div>

        
                <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1  ">  
                  <!-- <strong> 首次消費： </strong> -->
                     
                    <strong>接駁：</strong> {{ sumBus([pNote.bus_1W, pNote.bus_2W]) }}  元

  
                      <div class="md:grid grid-cols-2 gap-2 "> 
                        <div class=" md:p-2 col-span-2">
                          <!-- <v-select 
                           
                          ></v-select> -->
                          
                          <v-select
                            v-model="pNote.bus_1W"
                            :items="cntPeoepe"
                            prepend-icon="mdi-bus"
                            label="單趟.接駁..人數" 
                            solo
                            chips 
                            persistent-hint  
                          ></v-select>  

                          <v-select
                            v-model='pNote.bus_2W'
                            :items="cntPeoepe" 
                            prepend-icon="mdi-swap-horizontal"
                            label="來回.接駁人數" 
                            solo
                            chips 
                            persistent-hint 
                          ></v-select>
                        </div> 
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model='pNote.bus_payW'
                            :items="temp_payType"  
                            label="支付方式"  
                            chips 
                            filled
                            persistent-hint
                          ></v-select>
                        </div>  
                        <!-- <a class="col-span-2 "> </a> -->
                        
                      </div> 
                      
                  </div> 
<div class="border-1 border-gray-300 rounded-lg p-2 col-span-2  ">  
                  <div class="md:grid grid-cols-2 gap-4">
        <div class=" col-span-1 ">                  
                    <strong>弓具：</strong> {{ sumTools([pNote.tool_1, pNote.tool_2,pNote.tool_3,pNote.tool_4,pNote.tool_prd1,pNote.tool_prd2]) }}   元
                      <div class="md:grid grid-cols-2 "> 
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_1'
                            :items="cntPeoepe" 
                            chips  
                            label="傳統弓 100" 
                            persistent-hint 
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_2'
                            :items="cntPeoepe"  
                            label="反曲弓 200"  
                            chips 
                            persistent-hint 
                          ></v-select>
                        </div> 
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_3'
                            :items="cntPeoepe" 
                            label=" 複合弓 200"  
                            chips  
                            persistent-hint 
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_4'
                            :items="cntPeoepe"  
                            label="租箭(6支) 100"  
                            chips 
                            persistent-hint 
                          ></v-select>
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_prd1'
                            :items="cntPeoepe"  
                            label="輕.體驗 400"  
                            chips 
                            persistent-hint 
                          ></v-select>
                         </div>  
                         <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.tool_prd2'
                            :items="cntPeoepe"
                            label="晚.體驗 500"   
                            chips 
                            persistent-hint 
                          ></v-select>
                        </div> 
                         <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model='pNote.tool_payW'
                            :items="temp_payType"  
                            label="支付方式" 
                            chips
                            filled
                            persistent-hint
                          ></v-select>
                        </div>  
                      </div>   
                    </div> 


        <div class=" col-span-1 ">
        <strong> 場地： </strong> {{ sumRoom([pNote.room_prd1,pNote.room_prd2]) }} 元
        <div class="md:grid grid-cols-2 gap-2 ">  
                    <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.room_prd1'
                            :items="cntPeoepe"  
                            label="首次.場地費 200"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.room_prd2'
                            :items="cntPeoepe"  
                            label="觀賞.清潔費 100"  
                            chips 
                            persistent-hint
                          ></v-select>
                         </div>   
                         <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="pNote.room_payW"
                            :items="temp_payType"  
                            label="支付方式" 
                            chips
                            filled
                            persistent-hint
                          ></v-select>
                        </div>   
                    </div> 
                </div>
              </div>        
          </div>  
        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 ">

        <strong> 續時加購： </strong> 
        {{ sumAdd([pNote.addTm_prd1,pNote.addTm_prd2,pNote.addTm_prd3]) }} 元
          
        <div class="md:grid grid-cols-2 gap-2 ">  
                       
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.addTm_prd1'
                            :items="cntPeoepe" 
                            label="標靶 100"  
                            chips  
                            persistent-hint
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.addTm_prd2'
                            :items="cntPeoepe"  
                            label="應用 300"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>
                        <div class=" md:p-2 ">
                          <v-select
                            v-model='pNote.addTm_prd3'
                            :items="cntPeoepe"  
                            label="投影互動 50"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="temp_payType"  
                            label="支付方式" 
                            chips 
                            filled 
                            persistent-hint
                          ></v-select>
                        </div>   
                    </div> 
                </div>

        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 ">
       
                  <strong> 雜項： {{ pNote.oth_iNcm }} 元 </strong>
                    <div class="  ">  
                       <v-textarea
                            v-model='pNote.oth_des'
                            label="可留下顧客臨時狀況.由當班教練向上呈報"  
                            chips 
                            persistent-hint
                          ></v-textarea> 
                          <v-text-field   
                            label="實收金額"
                            v-model='pNote.oth_iNcm'
                            solo
                            clearable 
                          ></v-text-field> 
                        <v-select
                            v-model='pNote.oth_payW'
                            :items="temp_payType"  
                            label="支付方式"  
                            chips
                            filled 
                            persistent-hint
                          ></v-select> 
                    </div>  
                </div>
        <!-- <div class="border-1 border-gray-300 rounded-lg col-span-5 p-2">
          
          
          5
          
        </div> -->
        
        <div class="md:p-2 col-span-1  ">
          <strong>當班人員：</strong>
          <v-text-field   
            label="經手人"
            solo
            clearable 
            v-model="pNote.mdfEmpy"
          ></v-text-field> 
        </div>
        <div class="md:p-2 pt-6 col-span-1  ">
          <button 
              @click="savePMN" 
              class="btn btn-success my-2 md:p-2 col-span-1 text-xl "  
              > 儲存收費紀錄
            </button>  
        </div>

         

        <div class="md:p-2 col-span-1  ">

          <strong>應收金額：</strong>
          {{  sum([pNote.bus_iNcm, pNote.tool_iNcm, pNote.room_iNcm, pNote.addTm_iNcm, pNote.oth_iNcm]) }}
        <br>
          <!-- <strong>首次結算金額：</strong> -->
            <v-text-field
              label="首次結算金額"
              solo  
              v-model="PMN.input_money"
            ></v-text-field> 
        </div>
        <div class="md:p-2 col-span-1  ">
          <strong>續時結算金額：</strong>
          {{  sum([ pNote.addTm_iNcm, pNote.oth_iNcm]) }}
            <v-text-field
              label="續時結算金額"
              solo  
              v-model="PMN.input_money"
            ></v-text-field> 
        </div>
        <div class="md:p-2 col-span-1  ">
          <strong>總金額(實收)：</strong>
            <v-text-field
              label="實收總金額"
              solo  
              v-model="PMN.input_money"
            ></v-text-field>  
        </div> 
        <a class="text-xs text-gray-300 col-span-5 " > 開始編輯時間：  {{ systime }} </a> 
      </div> 

      <!-- {{nowPMS}} -->
      <hr>
       <!-- {{temp_toolsBorrow}} -->
      <!-- <hr>
        {{temp_toolsBorrow[0].price}} -->
   </v-container> 
                  
           </v-form> 
            </div> 
            <div v-else>
              <h4>資料已新增成功!</h4>
                  <button class="btn btn-success" @click="newPMN">再新增一筆</button>
                  <v-btn flat class="mx-2">
                    <router-link to="/PMNList"> 了解 收費紀錄</router-link>
                  </v-btn> 
            </div>
          </div>
</template> 

<script> 
import PayMentNoteDataService from "../services/PayMentNoteDataService";

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
        
        cntPeoepeP:['0 位','1 位','2 位','3 位','4 位','5 位','6 位','7 位','8 位','9 位','10 位','11 位','12 位','13 位','14 位','15 位','16 位','17 位','18 位','19 位','20 位',],
        Moneyflow:['現金','線上刷','抵用券','其他'],
        cntPeoepe:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        onlineRound:['06:00~','07:00~','08:00~','09:00~','10:00~','11:00~','12:00~',
               '13:00~','14:00~','15:00~','16:00~','17:00~','18:00~',
               '19:00~','20:00~','21:00~','22:00~','其他'], 
 
          nowPMS:[], 
          pNote:[{ 
            bk_userName:"",
            bk_phoneNum:"",
            bk_Date:"",
            bk_Rd:"",
            bk_Amt:"",
            
            safeID_Note:"",
            chkin_Time:"",

            bk_memo:"",
            bk_gpType:"",
            bk_cxtmType:"",

            bus_1W:"",
            bus_2W:"",
            bus_iNcm:"",
            bus_payW:"",
            tool_1:[],
            tool_2:[],
            tool_3:[],
            tool_4:[],
            tool_prd1:[],
            tool_prd2:[],
            tool_iNcm:[],
            tool_payW:[],
            room_prd1:[],
            room_prd1:[],
            room_iNcm:[],
            room_payW:[],
            addTm_prd1:[],
            addTm_prd2:[],
            addTm_prd3:[],
            addTm_prd99:[],
            addTm_iNcm:[],
            addTm_payW:[],
            oth_des:"",
            oth_iNcm:[],
            oth_payW:[],
            // tool:[{ t1,t2,OneWay_P,DubWay_P,}],

            fst_iNcm:[], 
            scd_iNcm:[],  
            all_iNcm:[], 

            mdfEmpy:"",

            crtDateTime:"",
            mdfDateTime:"",
            status:[]
          }], 

        PMN:{
            name:"",
            input_money:0,  
            Payment_Type:"", 
            PM_note:[],
            status: false
          }, 
 
        ex3: { label: 'thumb-color', val: 50, color: 'red' }, 

        submitted: false,
        temp_PaySetting:[],
        temp_toolsBorrow:[], 
        temp_busType:[],
        temp_mbrType:[],
        temp_roomType:[],
        temp_payType:[],
        temp_addTimeType:[],
        temp_cxtmType:[],
 

    };
  }, 
  mounted() {
    PayMentSettingDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    PayMentSettingDataService.getAll().off("value", this.onDataChange);
  },
  methods: { 

      onDataChange(items) {
       
      let _tutorials = [];  

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          name: data.name,
          type: data.type,
          price: data.price,
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
        });
      });
console.log("=========");
console.log(_tutorials);
this.nowPMS = _tutorials;

    //  ::  調用 已建檔.資料  ::
        var temp_ary = 
           _tutorials.map(function(item, index, array){ 
              if (item.name !== '') { return item.name; }  
            }); 
        this.temp_PaySetting = temp_ary ; 
        console.log(temp_ary); 

    //  ::  調用 已建檔.資料  ::
        this.temp_payType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '付款方式')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_payType);

    //  ::  調用 已建檔.資料  ::
        this.temp_mbrType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '會員類別')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_mbrType); 
        
   //  ::  調用 已建檔.資料  ::
        this.temp_cxtmType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '顧客輪廓')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_cxtmType);  



    //  ::  調用 已建檔.資料  ::
        this.temp_busType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '接駁費用')  { return {name:item.name ,price:item.price}; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_busType);
        
        
    //  ::  調用 已建檔.資料  ::
        var temp_ary2 = 
           _tutorials.map(function(item, index, array){ 
              if (item.type == '弓具費用') { return {name:item.name ,price:item.price};  }else{ return null; }
            }); 
        this.temp_toolsBorrow = temp_ary2.filter(e => e != null);  
        console.log("==== 首次場地費 金額 ===");  

    //  ::  調用 已建檔.資料  ::
        this.temp_addTimeType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '加時費用')  { return {name:item.name ,price:item.price}; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_addTimeType);  


    //  ::  調用 已建檔.資料  ::
        this.temp_roomType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '場地費用')  { return {name:item.name ,price:item.price}; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_roomType);  
      },
      sumRoom(nums){
      let r = 0; 
      let len = this.temp_roomType.length  
        for (let i = 0; i < len; i++) { 
          if(nums[i] == null){ nums[i]= 0 ;}
          if(this.temp_roomType[i].price == null){ this.temp_roomType[i].price=1  ;}
          r += nums[i]*this.temp_roomType[i].price
        } 
        this.pNote.room_iNcm = r ;
        return r
      },
      sumAdd(nums){
      let r = 0; 
      let len = this.temp_addTimeType.length  
        for (let i = 0; i < len; i++) { 
          if(nums[i] == null){ nums[i]= 0 ;}
          if(this.temp_addTimeType[i].price == null){ this.temp_addTimeType[i].price=1  ;}
          r += nums[i]*this.temp_addTimeType[i].price
        }  
        this.pNote.addTm_iNcm  = r ;
        return r
      },
      sumTools(nums){
      let r  = 0; 
      let len = this.temp_toolsBorrow.length  
        for (let i = 0; i < len; i++) { 
          if(nums[i] == null){ nums[i]= 0 ;}
          if(this.temp_toolsBorrow[i].price == null){ this.temp_toolsBorrow[i].price=1  ;}
          r += nums[i]*this.temp_toolsBorrow[i].price
        }  
        this.pNote.tool_iNcm= r ;
        return r
        
      },
      sumBus(nums){
      let r = 0; 
      let len = this.temp_busType.length
        
        for (let i = 0; i < len; i++) { 
          if(nums[i] == null){ nums[i]= 0 ;}
          if(this.temp_busType[i].price == null){ this.temp_busType[i].price=1  ;}
          r += nums[i]*this.temp_busType[i].price
        }
        this.pNote.bus_iNcm = r ;
        return r
      }, 
      sum(nums)
      {
        let result = 0;  
        nums.forEach(function(n){ if(n == null){ n= 0 ;} result += n * 1; });
        // if (result == null | result == "" ){ result=0; }
 
        return result
      },  
      

      savePMN() {
        var data = {

          // userName:"ff",
          bk_userName : this.pNote.bk_userName, ///(ok)
          bk_phoneNum : this.pNote.bk_phoneNum, ///(ok)
          // bk_Date     : this.pNote.bk_Date,
          bk_Rd       : this.pNote.bk_Rd,  ///(ok)
          bk_Amt      : this.pNote.bk_Amt,  ///(ok)
          safeID_Note : this.pNote.safeID_Note,   ///(ok)

          bk_note     : this.pNote.bk_note,    ///(ok)
          bk_gpType   : this.pNote.bk_gpType,  ///(ok)
          bk_cxtmType : this.pNote.bk_cxtmType,///(ok)

          // input_money : this.pNote.input_money, 
          // Payment_Type: this.pNote.Payment_Type, 

          mdfEmpy : this.pNote.mdfEmpy,///(ok)
          fst_iNcm: this.pNote.fst_iNcm,
          scd_iNcm: this.pNote.scd_iNcm,
          all_iNcm: this.pNote.all_iNcm,
          // scd_iNcm: this.sum([ pNote.addTm_iNcm, pNote.oth_iNcm]),
          // all_iNcm: this.sum([pNote.bus_iNcm, pNote.tool_iNcm, pNote.room_iNcm, pNote.addTm_iNcm, pNote.oth_iNcm,pNote.addTm_iNcm, pNote.oth_iNcm ]), 
          // mdfDateTime : moment().format('YYYY/MM/D hh:mm:ss SSS'),
          status: true
        };

        PayMentNoteDataService.create(data)
          .then(() => {
            console.log("收費成功!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

    newPMN() {
      this.submitted = false;
      this.tutorial = {
        input_money: "",
        userName: "", 
        status: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width:  90%;
  margin: auto;
}
</style>


<!-- </div> <div class="md:grid grid-cols-3 gap-2 ">  
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe" 
                            prepend-icon="mdi-broom"
                            label="temp_PaySetting[3].price" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div>  


                      <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_roomBorrow"
                          label="消費項目"
                          multiple
                          chips 
                          persistent-hint 
                      ></v-select>   -->
<!-- 
                       <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_addTimeType"
                          label="加時紀錄"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select> 

                      <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_payType"
                          label="付款方式"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select>   -->
                     


<!-- <v-text-field   
                          label="會員類別"
                          solo
                          clearable 
                        ></v-text-field>  -->
                        <!-- 
                          <v-slider
       
                            :label="ex3.label"
                            :thumb-color="ex3.color"
                            label="入場人數 "
                            hint ="超過10人 ,請額外加記"
                            thumb-label="always"
                            step="1"
                            min=0
                            max=10
                          ></v-slider>


                          <v-slider
                            v-model="value"
                            :rules="rules"
                            hint="10 in stock"
                            label="入場人數"
                            persistent-hint
                            
                            thumb-label="always"
                            ticks
                          ></v-slider> -->


                    <!-- <strong>場地費用：</strong>
                      <div class="md:grid grid-cols-3 gap-2 "> 
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe"
                            prepend-icon="mdi-chart-bubble"
                            label="首次.場地費" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select> 
                        </div>
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div>
                      </div> 
                      <div class="md:grid grid-cols-3 gap-2 ">  
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe" 
                            prepend-icon="mdi-broom"
                            label="觀賞.清潔費" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div> 
                      </div>  -->




                   <!-- <strong>場地費用：</strong>
                    <div class="md:grid grid-cols-3 gap-2 ">  
                      <div class=" md:p-2 col-span-2">
                        <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_roomType"
                          label="場地費....用"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select> 
                      </div> 
                    </div>  


                     <div class=" md:p-2 ">  
                      <v-data-table
                        :headers="servdtl_hds"
                        :items="PMN_2"
                        :items-per-page="2"
                        class="elevation-1"
                      ></v-data-table> 
                    </div>     -->



                   <!-- 
  // nums.forEach(function(n)
  // { if(n == null){ n= 0 ;} 
  //    result += nums[n]*this.temp_busType[n].price 
  //   //  result += n * 1; 
  
  // });
  // nums[0]*temp_busType[0].price +
  // nums[1]*temp_busType[1].price 
  -->