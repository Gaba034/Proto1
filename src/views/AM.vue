<template>
  <v-container class="containerv1">
    <div class="titlebox">
      <div class="title-1">
        <v-icon> {{ name }} </v-icon>
        <v-divider></v-divider>
        visitas:
        <v-icon> {{visits}} </v-icon>
        <v-divider></v-divider>
        criado em:
        <v-icon> {{day}} </v-icon>
      </div> 
      <div class="listbuttoncontainer">
        <div class="listbutton"> 
          <div icon>
          <a href="#news">
          <div class="titletext-1">
            <div>News</div>
          </div>
          </a>
          </div>
        </div>
        <a href="#about">
        <div class="listbutton"> 
          <div icon>
          <div class="titletext-1">
            <div>About</div>
          </div>
          </div>
        </div>
        </a>
        <div class="listbutton"> 
          <div icon>
          <a href="#codes">
          <div class="titletext-1">
            <div>Codes</div>
          </div>
          </a>
          </div>
        </div>
        <div class="listbutton"> 
          <div icon>
            <a href="#combos">
          <div class="titletext-1">
              <div>Combos</div>
          </div>
          </a>
          </div>
        </div>
        <div class="listbutton"> 
          <div icon>
          <div class="titletext-1">
            <a href="#moatg">
              <div>My opinion</div>
            </a>
          </div>
          </div>
        </div>
      </div>
      </div>
  <v-container class="containerv2">
    <div class="body">
      <div>
        <article class="main">
          <div id="news">
            <h1>Novidades</h1>
            {{ news }}
            <br>
            <iframe width="570" height="430" src="https://www.youtube.com/embed/0pgJtrlJO7Q" title="Mochi Buzz Cut" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
          <div id="about">
            <h1>Sobre</h1>
           {{about}}
           <br>
           {{about2}}
          </div>
          <div id="codes">
            <h1>Codes</h1>
            {{codes}}
          </div>
          <div id='combos'>
            <h1>Combos</h1>
            {{combo1}}
            <br>
            {{combo2}}
            <br>
            {{combo3}}
            <br>
            {{combo4}} 
            <br>
            {{combo5}}
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
export default {
  data() {
    return {
      name: "",
      new: "",
      day:"",
      visits: "",
      about:"",
      about2:"",
      uid: "",
      codes:"",
      opinion:"",
      profileExist: false,
    };
  },
  async mounted() {
    this.uid = "16";
    const gameProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    if (gameProfile.docs.length > 0) {
      this.profileExist = true;
      const roblox = gameProfile.docs[0];
      this.robloxId = roblox.id;
      this.visits = roblox.data().visits;
      this.name = roblox.data().name;
      this.day = roblox.data().day;
      this.about = roblox.data().about;
      this.about2 = roblox.data().about2;
      this.news = roblox.data().new;
      this.codes = roblox.data().codes;
      this.opinion = roblox.data().opinion;
      this.combo1 = roblox.data().combo1;
      this.combo2 = roblox.data().combo2;
      this.combo3 = roblox.data().combo3;
      this.combo4 = roblox.data().combo4;
      this.combo5 = roblox.data().combo5;
    }
  },
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
}
a:link, a:visited {
  color: white;
  text-decoration: none;
}

</style>