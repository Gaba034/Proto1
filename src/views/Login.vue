<template>
  <v-container class="fcontainer" fill-height fluid>
      <v-container class="logincontainer">
        <img class="image" src="https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png" alt="roblox" height="100px">
        <v-col class="col">
          <h1 class="titlelogin">Welcome! Identify yourself.</h1>        </v-col>
        <v-col>
          <v-snackbar dark v-model="errorLogin" timeout = "1500">Wrong info</v-snackbar>          <v-text-field label="E-mail" v-model="user.email" dark></v-text-field>
          <v-text-field label="Password" v-model="user.password" 
          dark
          :type="show ? 'text' : 'password' "
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off' "
          @click:append="show = !show"></v-text-field>
          <v-btn @click="login" dark>login</v-btn>
        </v-col>
        <v-dialog v-model="account" persistent max-width="300">
      <v-card>
        <v-card-title>User not found.</v-card-title>
        <v-card-text>
          Create new account?
        </v-card-text>
        <v-card-actions dark>
          <v-spacer></v-spacer>
          <v-btn color="black" text @click="newAccount">Yes</v-btn>
          <v-btn color="red" text @click="account = false">No</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-container>
  </v-container>

</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      account: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    async loginGoogle() {
        await fb.auth.signInWithPopup(fb.googleProvider)
        this.$router.push({ name: "Home" });
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password,
        );
        this.$router.push({ name: "Home" });
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true;
            break;
          case "auth/invalid-email":
            this.errorLogin = true;
            break;
          case "auth/user-not-found":
            this.account = true;
            break;
          default:
            this.errorLogin = true;
            break;
        }
      }
    },
    async newAccount() {
      this.account = false;
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password,
      )
      this.login();
    },
  },
};
</script>

<style>

.fcontainer{
  background-color: rgb(19, 18, 18);
}
.logincontainer{
  background-color: rgba(255, 255, 255, 0.116);
}
.titlelogin{
  color:rgb(163, 206, 209) ;
  }

.image{
  padding: 0px;
  margin:0px; 
  animation: 1s fadein;
  animation-duration: 0.5s;
  opacity: 1;
}
@keyframes fadein{
  from{
    opacity: 0;
    }
  to{
    opacity: 1;
  }
}
.col{
  height: 300px;
  animation:fadein 1s;
  animation-duration: 3s;
  margin: 100px;
}
</style>