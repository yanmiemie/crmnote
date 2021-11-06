<html lang="pt">
  <head>
    <meta charset="utf-8">
    <title>app vue.js and firebase</title>
    <link rel="stylesheet" type="text/css" href="../../main.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>
    <script src="https://cdn.jsdelivr.net/vue/1.0.24/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/vuefire/1.1.0/vuefire.min.js"></script>
  </head>
  <body>
    <div id="app">
     
     <div class="window-wrapper">
    <div class="window-title">
      <div class="dots">
        <i class="fa fa-circle"></i>
        <i class="fa fa-circle"></i>
        <i class="fa fa-circle"></i>
      </div>
      <span class="title">App vue.js and firebase</span>
    </div>
    <div class="controls">
      <div class="btns">
        <div class="add-task btn active">
          <i class="fa fa-plus"></i>
        </div>        
        <div class="my-account">
          <div>
            <a href="#">Glauber F</a>
            <span>Logado</span>
          </div>
        </div>
      </div>
      <div class="overlay">
        <div class="add-task active" id="add-task">
          <form @submit.prevent="addTodo">
            <input type="text" v-model="newTodo" placeholder="Add Task ...">
            <button class="add-task-btn"><i class="fa fa-plus"></i></button>
          </form>
        </div>        
      </div>
    </div>
    <div class="main-area">
      <ul>
        <li v-for="item in items" track-by=".key" class="task">
          <div>            
            <span class="description">{{ item.text }}</span>
            <button class="pull-right" @click="removeTodo(item['.key'])"><i class="fa fa-times"></i></button>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <span>Total tasks: {{ items.length }}</span>
    </div>
  </div>


    </div>

    <script>
      /* global Vue, Firebase */
      var itemsRef = new Firebase('https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app')

      new Vue({
        el: '#app',
        data: {
          newTodo: ''
        },
        firebase: {
          items: itemsRef.limitToLast(25)
        },
        methods: {
          removeTodo: function (key) {
            itemsRef.child(key).remove()
          },
          addTodo: function () {
            if (this.newTodo.trim()) {
              itemsRef.push({
                text: this.newTodo
              })
              this.newTodo = ''
            }
          }
        }
      })
    </script>
    <script>    	unescape("Desenvolvido%252520por%252520Glauber%252520Funez%252520(https%25253A%25252F%25252Fwww.facebook.com%25252Fglauber.funez)%25252C%252520precisando%252520de%252520um%252520sistema%252520web%252520entre%252520em%252520contato%252520ou%252520acesse%252520vimbo.com.br.%25250Afacebook%252520oficial%252520do%252520autor%25253A%252520https%25253A%25252F%25252Fwww.facebook.com%25252Fglauberoficial");
    </script>
  </body>

  <style>
  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
/* Glauber Funez */
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* Glauber Funez */
body{
  background: url(http://www.vauls.com/img/3.jpg) #608566;
  font-family: "Open Sans", Arial, sans-serif;
  color: #66747C;
  font-size: 14px;
}

.window-wrapper{
  background:#fff;
  overflow:hidden;
  width: 460px;
  margin: 40px auto;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height:605px;
}/* Glauber Funez */
.window-title{
  padding: 10px 14px 20px;
  background: #2C3E4E;
  border-bottom:1px solid #243341;
}
.window-title .dots{
}
.window-title .dots i{
  margin-right: 3px;
  font-size: 14px;
}
.window-title .dots i:nth-child(1){
  color: #F57E7D;
}
.window-title .dots i:nth-child(2){
  color: #FFC881;
}/* Glauber Funez */
.window-title .dots i:nth-child(3){
  color: #82CF85;
}
.window-title .title{
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  display: block;
  color: #969FAA;
}
button{
  border:0;
  display:block;
  float:left;
  height:30px;
  width:40px;
  color:#C4C2C2;
  font-size:18px;
  margin:0;
  cursor:pointer;
  float: left;
  background: transparent;
  outline: none;
}/* Glauber Funez */
button.add-task-btn{
  width:30px;
}
input[type="text"], input[type="search"]{
  height:30px;
  padding:0;
  border:0;
  display:block;
  margin:0;
  font-size:14px;
  padding:0 5px;
  outline:medium none;
  border-radius: 3px;
  color: #696969;
  float: left;
  min-width: 387px;
  background: transparent;
  text-indent: 5px;
}/* Glauber Funez */
li{
  display:block;
  padding:13px 15px;
  font-size:14px;
  border-bottom:1px solid #E7E3E3;
  color: #868686;
}
li:first-child{
  border-top:1px solid #E7E3E3;
}
ul{
  padding:0;
}
.main-area{
  overflow-y: auto;
  position: absolute;
  top: 152px;
  bottom: 33px;
  left: 0;
  right: 0;
}/* Glauber Funez */
.main-area > div{
  overflow:hidden;
}
.controls{
  overflow: hidden;
}
.done-true{
  color:#dedede;
}
.done-true > label .fa-square-o{
  display:none;
}/* Glauber Funez */
.done-false > label .fa-check-square-o{
  display:none;
}
.status label{
  font-size: 18px;
}
input[type="checkbox"]{
  -webkit-appearance:none;
  float:left;
}
label{
  display:block;
  width:17px;
  height:16px;
  overflow:hidden;
  cursor:pointer;
  float: left;
}/* Glauber Funez */
.task .fa-times{
  float: right;
  font-size: 18px;
  color: #D1D1D1;
  cursor: pointer;
}
.task .fa-times:hover{
  color: #8A8A8A;
}
.task .description{
  line-height: 20px;
  display: inline-block;
  margin-left: 13px;
  max-width: 375px;
}/* Glauber Funez */
.footer{
  background: #F3F3F3;
  border-top: 1px solid #E9E9E9;
  padding: 10px 15px;
  font-size: 12px;
  color: #868686;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.btns{/* Glauber Funez */
  position: relative;
  height: 40px;
  background: #4A5D6D;
  box-shadow: inset 0 -2px 2px rgba(0,0,0,0.1);
}
.btns > .btn{
  float: left;
  width: 28px;
  text-align: center;
  color: #79889d;
}
.btns > .btn.active{
  background: #6E8599 !important;
  color: #fff !important;
}
.btns > .btn:hover{
  background: #556A7C;
  color: #fff !important;
}/* Glauber Funez */
.btns > .btn.active{
  border-left: 1px solid #465866;
  border-right: 1px solid #465866; 
  width: 26px;
}
.btns > .btn.active:first-child{
  border-left: 1px solid #6E8599;
}
.btns > .add-task{
  padding: 8px 10px 4px;
}/* Glauber Funez */
.btns > .search-task{
  padding: 5px 10px 7px;
}
.btns > .btn > i{
  font-size: 28px;
  cursor: pointer;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
}
.btns > .btn.active > i{
  color: #fff;
}
.overlay{
  background: #6E8599;
  padding: 10px;
  border-bottom:4px solid #4A5D6D;
}/* Glauber Funez */
.overlay > div{
  display: none;
  overflow: hidden;
  background: #fff;
  border-radius: 3px;
  box-shadow: inset 0 2px 2px rgba(0,0,0,0.2);
  border:1px solid #667886;
}
.overlay > div.active{
  display: block;
}
.btns > .my-account{
  float: right;
  overflow: hidden;
  margin: 5px;
}/* Glauber Funez */
.my-account > div{
  overflow: hidden;
  float: right;
  height: 32px;
}
.my-account > div:nth-child(2){
  margin-right: 6px;
}
.my-account > div > img{
  border-radius: 32px;
  float: right;
}/* Glauber Funez */
.my-account > div > a,
.my-account > div > span{
  display: block;
  font-size: 12px;
  color: #AFAFAF;
}/* Glauber Funez */
.my-account > div > a{
  font-weight: bold;
  color: #F8F8F8;
  text-decoration: none;
  font-size: 14px;
  margin-top: 2px;
}

  </style>
</html>
