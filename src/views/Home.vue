<template>
  <section id="app">
    <LoadingScreen/>
  <section class="games">
            <article class="cards">
            <div class="title1">
              <v-icon class="icon" dark>mdi-information-outline</v-icon>
              <router-link to="bf" class="gamelink">Blox Fruit</router-link>
            </div>
            <img src="https://tr.rbxcdn.com/d5212353fef614a85dfe4bf6570a2087/768/432/Image/Png" height="340px" alt="BF">
            
        </article>
            <article class="cards">
            <div class="title1">
              <v-icon class="icon" dark>mdi-information-outline</v-icon>
              <router-link to="gpo" class="gamelink">Grand Piece Online</router-link>
            </div>
            <img src="https://tr.rbxcdn.com/8f38cf38e4164d00edc15d3b371c0440/768/432/Image/Png" height="340px" alt="GPO">
            
        </article>
            <article class="cards">
              <div class="title1">
                <v-icon class="icon" dark>mdi-information-outline</v-icon>
                <router-link to="astd" class="gamelink">All star tower defense</router-link>
              </div>
              <img src="https://tr.rbxcdn.com/7cc55efd2738987ff4a121e83c6d2202/768/432/Image/Png" height="340px" alt="ASTD">
            
        </article>
            <article class="cards">
            <div class="title1">
              <v-icon class="icon" dark>mdi-information-outline Shindo Life</v-icon>
              <router-link to="sl2" class="gamelink">Shindo Life 2</router-link>
            </div>
            <img src="https://tr.rbxcdn.com/b114c593ffe2f44b318e8554b5031ced/768/432/Image/Png" height="340px" alt="SF2">
            
        </article>
    </section>
    <section>
      <div class="container-2 otg">Outros Jogos</div>
    </section>
      <section>
      <div class="container-1">
        <div class="contentcnt1">
          <div icon>
            
            <div class="gamename"><router-link to="psx">Pet Simulator X<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
            <img src="https://t7.rbxcdn.com/72fb2f70dfa4cc2e8f412976fd23f970" width=450px height="300px">
          </div>
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="bss">Bee Swarm Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://tr.rbxcdn.com/a72a4f58392571630e2bed31163f7eac/768/432/Image/Png" width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="df">Demon Fall<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
           <div class="imagedf"><img src="https://tr.rbxcdn.com/d13f788917ab4c20670b1f84b30863e7/768/432/Image/Png"  width=450px height="300px">

           </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="afs">Anime Fighters Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://t3.rbxcdn.com/27ac85290a9692f6aa8bd2f97cc42f84" width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="afis">Anime Fighting Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://t4.rbxcdn.com/92b01bd4479bc7f54a9c2c70c9feca8d"  width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="kl">King Legacy<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://tr.rbxcdn.com/c229d1db355714b06d2a87802890e2a4/768/432/Image/Png"  width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="ads">Anime Dimensions Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://progameguides.com/wp-content/uploads/2021/06/roblox-anime-dimensions-codes-featured.jpg"  width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="atrs">Anime Training Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div icon><img src="https://t2.rbxcdn.com/27ed72499ee456d5ff39d9ffc7046cfb"  width=450px height="300px">

          </div >
        </div>
        <div class="contentcnt1">
          <div class="gamename"><router-link to="acs">Anime Clicker Simulator<v-icon dark x-large>mdi-arrow-right-bold</v-icon></router-link> </div>
          <div class="image"><img src="https://t3.rbxcdn.com/aabff966b87ac88314582591fab10ac2"  width=450px height="300px">

          </div >
        </div>
      </div>
    </section>
    <div>

    </div>
    </section>
</template>
<script>

import axios from "axios"
import LoadingScreen from"../components/LoadingScreen.vue"
export default {
  components:{
    LoadingScreen
  },
  data (){
    return{
      contents:null
    }
  },
  mounted () {
    axios
    .get('http://localhost:8080/demo/vue/switchable-grid/api/products.json')
    .then(response => (this.contents = response.data))
  }
  }
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}
main{
  padding: 0px;
}
.games {
    display: flex;
    padding: 0px;
    margin: 0px;
}
.cards {
    position: relative;
    width: calc(100% / 4);
    height: 400px;
    transition: all .3s;
    overflow: hidden;
    transition: all .7s;
    justify-content: space;
    background:rgba(0, 0, 0, 0.808);
}
.cards:hover {
    width: 500px;
    height: 400px;
    transition: all .3s;
}
.cards:hover{
    left: 0px;
}
.img {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.card-img img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.title1{
  background: rgba(0, 0, 0, 0.397);
  height: 10%;
  transition:0.2s;
  align-content: center;
  color: black;
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-size:0px;
  border: 1px;
  border-radius: 10px;
}
.title1:hover{
  filter: opacity(1);
  height: 100px;
  width: 100%;
  background:rgba(0, 0, 0, 0.144);
  transition: all 1s;
  transition: all 0.7s;
  color: white;
  font-size:25px;
}
.gamelink{
  text-decoration:none;
  outline: none;
  color: antiquewhite;
}
.icon{
  filter: opacity(1);
}
.title .icon:hover{
  filter: opacity(0);
}
.a{
  width:100%;
  height:20%;
  background-color: rgb(93, 10, 160);
  display: flex;
  justify-content:space-between;
  flex-direction:column;
  flex-wrap:nowrap 100px;
  }
.otg{
  color: white;
  font-size: 200%;
  
}
.container{ 
  display: flex;
  justify-content:space-around;
  background:rgb(0, 0, 0);
  margin:0px;
  padding:0px;
  flex-wrap: wrap;
}
.container-1{ 
  display: flex;
  justify-content:space-around;
  background:rgb(36, 35, 35);
  margin:10px;
  padding:10px;
  flex-wrap: wrap;
  border-radius: 20px;
}
.contentcnt1 {
  flex: 0 0 33%;
  margin:0px;
  padding: 0px;
  background-color: rgb(0, 0, 0);
}
.container-2{ 
  display: flex;
  justify-content:space-around;
  background:rgba(0, 0, 0, 0.808);
  margin:0px;
  padding:0px;
  flex-wrap: wrap;
  height: 10vh;
  padding-top: 10px;
}
h1{
  color:white;
}
html{
  background-color: black;
}
a:link, a:visited {
  color: white;
  text-decoration: none;
}
.gamename{
  background-color: rgba(13, 13, 14, 0.877);
  position: absolute;
  width: 450px;
  height: 300px;
  font-size: 60px;
  padding: 30px;
  transition: 0.4s;
  opacity: 0;
  border: 10px solid rgba(0, 0, 0, 0.377);
}
.gamename:hover{
  opacity: 1;
  animation-name: gamehover;
  animation-duration: 1s;
  animation-delay: 0.4s;
  animation-iteration-count: infinite;
  transition: 0.4s;
  color: white;
}
.frame{

  border: 6px solid rgba(169, 221, 224, 0.342);
  border-radius: 50px;
}
.main{
  padding: 2%;
  width: 100%;
  font-size: 25px;
  color: white;
  }
</style>



