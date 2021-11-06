<template>
  <div v-if="currentTutorial" class="edit-form">

    <h4>  修改內容  </h4>

    <button
      class="border-2 border-solid px-2 mr-2"
      v-if="currentTutorial.status != true "
      @click="updatePublished(false)"
    >
      停用設定
    </button>
    <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button>

    <button class="border-2 border-solid px-2 mr-2" @click="deleteTutorial">
      刪除
    </button>

    <button type="submit" class="border-2 border-solid px-2" @click="updateTutorial">
      更新項目
    </button>
    <p>{{ message }}</p>

    <br>
    <br>

    <form> 
                  <v-text-field   
                    label="請填寫 名稱"
                    outlined
                    clearable
                    v-model="currentTutorial.name"
                  ></v-text-field>  

                  <v-text-field   
                    label="請填寫 售價"
                    outlined
                    clearable
                    v-model="currentTutorial.price"
                  ></v-text-field> 

                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="請註記 用途"
                    clearable
                    height=30px
                    v-model="currentTutorial.note"
                  ></v-textarea> 
 
                  <v-container fluid>
                    <v-select
                      v-model="currentTutorial.type"
                      :items="BasicType"
                      label="設定 使用類別"  
                      persistent-hint
                    ></v-select>  
                  </v-container>

      <div class="form-group">
        <label><strong>狀態:</strong></label>
        {{ currentTutorial.status ? "true" : "false" }}
      </div>
 
    </form> 
  </div>

  <div v-else>
    <br />
    <p> 請點選 消費項目...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/PayMentSettingDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
      Moneyflow:['現金','線上刷','抵用券','其他'],
      BasicType:['會員類別','接駁費用','弓具費用','加時費用','場地費用','會員類別','付款方式','會員點數','其他','特殊折價'],
         
 
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
          this.currentTutorial.published = status;
          this.message = "停用這項設定 (功能未完成)";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
        name: this.currentTutorial.name,
        note: this.currentTutorial.note,
        type: this.currentTutorial.type,
        price: this.currentTutorial.price,
        status: this.currentTutorial.status,
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
  max-width: 900px;
  margin: auto;
}
</style>
