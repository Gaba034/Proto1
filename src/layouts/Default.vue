<template>
  <v-app>
    <LoadingScreen />
    <v-app-bar app color="secondary" elevation="1" v-model= "aside" class="vappbar">
      <img class="image" src="https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png" alt="roblox" height="100%"><h1 class="r">R</h1><h1 class="elper">elper</h1>
      <v-list-item v-for="item of items" :key="item.title" link :to="item.to" class="upperlist"> 
          <v-btn  icon>
          <v-list-item-content dark class="titletext">
            {{ item.title }}
          </v-list-item-content>
          </v-btn>
        </v-list-item>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app color="secondary" ></v-footer>
  </v-app>
</template>

<script>
import LoadingScreen from "../components/LoadingScreen.vue"
export default {
  components:{
    LoadingScreen
  },
  data(){
    return{
      aside:true,
      items:[
        {title:"Home",to:"/"},
        {title:"Quit",to:"/login"},
      ]
    };
  },
};
</script>

<style>
.vappbar{
  background-size: cover;
}

.v-toolbar__content{
  justify-content: right;
}
body::-webkit-scrollbar {
  width: 5px;              
}

body::-webkit-scrollbar-track {
  background: rgb(163, 206, 209);        
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.473);   
  border-radius: 200px;   
  border: 1px solid rgb(163, 206, 209);   
}
header{
  margin: 10px;
  padding: 0px;
}

.upperlist{
  background: rgb(163, 206, 209);
  justify-content: center;
  max-width: 10%;
  display: flex;
  justify-content: center;
  margin: 3px;

  }
.upperlist:hover{
  animation-name: barcolor;
  animation-duration: 1s;
  animation-delay: 0.4s;
  animation-iteration-count: infinite;
}
@keyframes barcolor{
  0%{
    background: rgb(163, 206, 209);
  }
  50%{
    background: rgb(137, 220, 226);
  }
  100%{
    background: rgb(163, 206, 209);
  }
} 
.r{
    color: rgb(0, 0, 0); }
    *{
  margin:0px;
}
.v-application{
  font-family: Arial, Helvetica, sans-serif;
}
.containerv1{
  display: flex;
  background-color:unset;
  padding:10px;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.containerv2{
  background-color:rgba(255, 255, 255, 0.048);
  padding: 1px;
  margin: 0px;
  border: 3px solid rgb(163, 206, 209);
  border-radius: 20px;
}
.body{
  background: rgba(85, 85, 85, 0.205);
  display: flex;
  padding: 0px;
  width: 100%;
  height: 100%;
  border: 3px solid rgb(163, 206, 209);
  border-radius: 10px;
}
.titlebox{
  display: flex;
  height: 250px;
  width: 400px;
  justify-content: left;
  margin-top: 1%;
  border: 2px solid rgb(163, 206, 209);
  border-radius:10px;
  
}
.title-1{
  background-color: rgb(163, 206, 209);
  border: 10px solid rgb(163, 206, 209) ;
  padding: 0px;
  padding-top: 10%;
  color: rgb(255, 255, 255);
  border-right-color: rgba(169, 221, 224, 0.63);
  font-size: 25px;
  height: 100%;
  width: 100%;
  justify-content: center;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.listbuttoncontainer{
  background:rgb(163, 206, 209);
  padding-top: 0px;
}
.listbutton{
  background:none;
  size: 10px;

}
.titletext-1{
  text-decoration: none;
  color: rgb(255, 255, 255);
  border: 2px solid rgb(163, 206, 209);
  padding: 0px;
  border-radius:10px;
  background-color: rgba(165, 219, 223, 0.452);
  height:50px ;
}
.titletext-1:hover{
  background: rgba(156, 252, 255, 0.466);
}
main{
  background: rgba(169, 221, 224, 0.342);
  padding: 0px;
  margin: 0px;
}
.main{
  padding: 2%;
  width: 100%;
  font-size: 25px;
}
.elper{
  padding-right: 60%;
}
a:link, a:visited {
  color: white;
  text-decoration: none;
}
.main{
  padding: 2%;
  width: 100%;
  font-size: 25px;
  color: white;
}
a:link, a:visited {
  color: white;
  text-decoration: none;
}
.frame{

  border: 6px solid rgba(169, 221, 224, 0.342);
  border-radius: 50px;
}
</style>