<template>
  <v-container class="containerv1">
    <div class="titlebox">
      <LoadingScreen/>
      <div class="title-1">
        <v-icon> {{ name }} </v-icon>
        <v-divider></v-divider>
        visitas:
        <v-icon> {{visits}} </v-icon>
        <v-divider></v-divider>
        criado em:
        <v-icon> {{day}} </v-icon>
      </div> 
      </div>
  <v-container class="containerv2">
    <div class="body">
      <div>
        <article class="main">
          <div id="news">
            <h1>Novidades</h1>
            <p>
            {{ news1 }}
            </p>
            <div class="imgvid1">
            <iframe class="frame"
             width="424" 
             height="238" 
             src="https://www.youtube.com/embed/0pgJtrlJO7Q" title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
          </div>
          <div id="about">
            <h1>Sobre</h1>
            <p>
           {{about}}
           </p>
           {{about2}}
          </div>
          <div id="codes">
            <h1>Codes</h1>
        <v-list  class="itemgroup">
        <v-list-item-group>
        <v-list-item class="codes testing-code" v-for="codes of codigos" :key="codes.id">
                <CopyToClipboard v-slot="props">
                <div class="flex items-center space-x-2">
                <button
                @click="props.copy(codes.titulo)"
                :disabled="props.status === 'copied'"
                >
                {{codes.titulo}} = {{codes.desc}}
              </button>
              <div v-if="props.status ==='copied'" dark><v-icon>mdi-emoticon-happy-outline</v-icon></div>
              </div>
              </CopyToClipboard>
                
        </v-list-item>
        </v-list-item-group>
        </v-list>
          </div>
          <div id='combos'>
            <h1>Combos</h1>
            {{combo}}
          </div>
          <div id='moatg'>
            <h1>Minha opinião</h1>
            {{opinion}}
          </div>
        </article>
      </div>
    </div>
  </v-container>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
import CopyToClipboard from "../components/CopyToClipboard.vue"
import LoadingScreen from "../components/LoadingScreen.vue"
export default {
  components:{
    CopyToClipboard,
    LoadingScreen
  },
  props:["codigos","codes"],
  data() {
    return {
      name: "",
      news1: "",
      day:"",
      visits: "",
      about:"",
      about2:"",
      uid: "",
      opinion:"",
      combo:"",
      desc:"",
      profileExist: false,
    };
  },
  async mounted() {
    this.uid = "20";
    const gameProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    this.searchCodes();
    if (gameProfile.docs.length > 0) {
      this.profileExist = true;
      const roblox = gameProfile.docs[0];
      this.robloxId = roblox.id;
      this.visits = roblox.data().visits;
      this.name = roblox.data().name;
      this.day = roblox.data().day;
      this.about = roblox.data().about;
      this.about2 = roblox.data().about2;
      this.news1 = roblox.data().news1;
      this.codes = roblox.data().codes;
      this.opinion = roblox.data().opinion;
      this.combo = roblox.data().combo;
    }
  },
  methods: {
    async searchCodes() {
      this.codigos = [];
      const logCode = await fb.tasks11Collection
        .where("owner", "==", this.uid)
        .get();
      for (const doc of logCode.docs) {
        this.codigos.push({
          id: doc.id,
          titulo: doc.data().titulo,
          desc: doc.data().desc,
        });
      }
    },
  }
};
</script>

<style>
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
.imgvid1{
  padding: 10px;
  padding-left: 300px;
  display: flex;
  flex-direction: column;
  border: 3px rgba(0, 0, 0, 0.068) solid;
  border-right: none;
  border-bottom: none;
  border-top: none;
  border-radius: 10px;
}
.itemgroup > .v-sheet{
  width: 75%;
  margin: 0px;
  position: relative;
  padding-left: 100px;

}
.codes{
  min-width: 50%;
  max-width: 75%;
  padding: 10px;
  padding-left:50px;
}
</style>
