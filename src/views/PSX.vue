<template>
  <v-container class="containerv1">
    <LoadingScreen/>
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
      </div>
  <v-container class="containerv2">
    <div class="body">
      <div>
        <article class="main">
          <div id="news">
            <h1>Novidades</h1>
            <p>
            {{ new1 }}
            </p>
          </div>
          <div id="about">
            <h1>Sobre</h1>
            <p>
           {{about}}
           </p>
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
            <h1>Táticas</h1>
            {{combo}} <br>
            <img class="frame" src="data:image/jpeg;base64,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" alt="">
            <br>
            <img class="frame" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEA8QEBIVFRAPEA8PDxUQEA8QFRUQFRUWFhUVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lIB8rLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEQQAAEDAQMHCgIHBwMFAAAAAAEAAhEDBBIhBRMxQVFhkQYUIlJxgZKhwdEysSRCU3KisvAjMzRic4LhFZPSB0Nj4vH/xAAaAQACAwEBAAAAAAAAAAAAAAAABAEDBQIG/8QAOhEAAQMCAwUGBQEHBQEAAAAAAQACEQMEEiExBUFRYXETgZGxwdEUIjKh8FIGFUJTkuHxM2JystIj/9oADAMBAAIRAxEAPwD3FCEIQhUq/wARV1Uq/wARXbNUrd/QOqjQlQrUgkRCVCEQkhEJySEIhIluoWblO3xLGadDjs3BL3V1TtqeN/cN5PAfmShxDRJVp9qYCROjDDFN523fwWC1xGhWGVAR+is6y2wyvk+Gnrke8x4HuU0X0qmTsj1WsLW3fwTues38Fl954FKtNtXFoQeibbRZu81qNtrN/BNNtZv4LMhL2qcZU9i1agtzN/BN56zfwWaWpIRjKOxatI2xm/gjnjN/BZqIRjKj4di0ueM38EG2M38Fmwlu7UYyj4di0OdN38E9tZp/zgs2diAVPaFR8MxasJCobNXnA6dSsQrWuBSNSmWmCmQiE+EgC6lV4UtNmsqZrUNCkCrJTlOmAlATS1PlIuU0QDkmsOKtqowY96trh6st5goQhC5V6EIQhCFSr/EVdVKt8RXbNUtdfSOqahCFakEIQhCEJQkVHKNtudBvxEYnYN29UXFwyhTNR+g+/IKSQ0SU3KduiWMOP1js3DesZKSheHu7t9zUxv7huA4e539IASe4vMlIiEsolKyFxCROa8hIhS12E4mmCFIyMhXRiiFTaY0HyVmlWBw1herstqsuHBjhDj3g9PbzWrRug84XZHzT0spLwReC1U1KWB2eadc/QTLwSh6EInYkS3wiRtQpSQiE5BIQhAV+z15wOn5rOvBOFQKQYVb2Bwha0JWqCzV72E4hWA1Xh0hJOplphOCcE1EqF2DCdKWUyUsqF01ykbqVlVGnEdoVtVuTlEyChCELlXIQhCEIVKt8RV1Uqx6RXbNUtdfSOqahJKVWpBCWEkJULqEQueymZqvO8DgI9F0TTHcuXqmSTtlee/aCp/8ANjOJJ8BHqqbjQBQoToSwvKpKEyEQnQlhAU4UxKnXUt1TCMKjU1BuE7fnimgfrQrTcVtbEpMNYuJ+YaDzPdpGqdsqbS/ETmNAmQiFJCLq9QtUqOEQpIRdUIUcIhSXUl1CEyEoPBOuouoQkczWNCbCkbglc3WpQpcnOioBtlbJWHRMOadhWzCsYlq+UILkkpbiYVYlTO9PvIvpkJpUwuS8hTNdiO0K+sunp7wtRVVAnrJ2IOQhCFWnUIQhCEKhX+Iq+s20O6bu30VlPVKXhhg6oCWVGHp0q2FnYk8FPBUSyrbbHB7g0wBhq70ne3dO1YHvBMmMl32mELWtb4pvd/LHHBc2Qpn2t7hBdI7lFeXk9pXrbqoHNBAA3/56Kmq8PKbCWEpcrFFmEkYnyS9raPuX4WbtTuCilSNR0NVaEQtBlCdAQ+hGkea0P3HW/U37+yY+DdxCz4SwrwYNg4lKA3q+ZQdiVR/E37+yn4J3EKhdTm4aFW5P2g1Kb3P6X7VwbifhELVutVjthVWmMYy6oFm45yFVDz+gE5tXb6BW6dCdDZ7yn1LMQJLYHaVezZ13TMtrf9j5q1tCq3R/n7Ks3HQnXUrTGgAdizcr2t7HUCCQDVDXAawVs0g8gB0TvjRNiQ35loXUt1LeTK1QgYb1XXrClTNR2gUPeGNLjuTrqZUMKLPu2+TU1zydKxbjbILCKQIJ3mMvuUo+7BHy6pxqn9QnU6uo61FeS3tyzGX1dr8eMk8zke7RLCs8GZVgtWtSdLWncFl0awIA1/NTCu4YTC9hb3DKrcbND9uR5rQdFVoLSr5JSSqdC0EnHYVPSfLQdoTbXApGqCx0FSEoaU1VbbVgXZxdv+rrU1HtptLnaBUF8ZqayWm8/cSLvYFtLmrG4BzcdccSulWfbVjUZnqCff8AstKwJLXTyQhCEwn0IQhCELItR6bu0fILXXM2i1xaatN2tzSw/wBowXTKjWuAdvy71n7RdFNvM+hVwFOChCkaU2QsuU+/AJ2YrCc6cduK2qjsO1Z9WiCTqPeVg7Ysqtzh7Mj5ZyOUzG/j1gc002g57MTVTRP6CsizjXj2EhSgAaFk09h1T/qOA6Z+wXTbJ51IH3VajTJMkYDzVkISretLRlszA3qSdSnaNIUmwFpZPqtBx4ptue1xw71SagvTKshI8qN5gE7ASnqC2uilUI0im8/hKApWbyUb9GB6z3n09FttGICyuTDIs1L+8/iK1Auqp+d3VQ3Rbtji6I70tri44HYmWBvQBOkqLKLiMdq5XeeFZL2wSsXlIIZTd1arD81tuM4rI5SN+juOxzCF1T+sLh2hWsUhCUYgHaAUKuARmuiFXfQ2cFCryr2iJG1ef2pYUqbO1ZlnpuPTh5dEhc0GtGJuSiQlSLBSaFPQqz0T3FQFS2ZhkngtDZfafEtDJ/3dOff/AGV1vi7QR3qwBirVmfhGxUyFPQPTEmGnDyw816wvwPa46aHvTF42QHDp4q0XLGzwqvL/AKo6LO7WVqZRbm2kmDe6IG0nbuWPSoAAAD0VW0q0NDAddVl1g9rw1w7vJWqMX26NPsupXLUGC+3DQ4ei6lUbP+l3Vauz9HdyEIQtBaKEIQhCFxWWqP0tzy4hoLS7XEN8gu1XHZbrNFoqyRgWz4Qkr55Y1pAn5vQrL2tHZN/5ehWmE4BY2RcoXnOpCS1ovNMaBs7McFsStejVFZgeN6y2uDhITKpUTsceKldTnW7yVa3HNsvNOMgY6FU+m6SVrW9xTDW0xM+qVCy/9RfsbwPul/1F/wDLwVeEpyVqhqdI1LH5+/dwRz9+7gjCiVrShZXP37uCXn793BGFErUVPLJiz1/6bhxwVfn793BR2q0GoxzHRdcIMYFS0QQVBVvIIizUfuzxJWhGO5YtntJYxrGxDQGidMBTC2v2BDs3EqRouns9qgRqGA0JlsrXhGruXO8/du7gU3/UHbB3yoUZrUDZWZyixs740C6fMJDlF+wcCobXXNRjmO0OEGMD3IbkQVJWpYnTTp72MPkFMWrGo2lzWtYNDQGidMDan8+fu4KCELVVWs0zOme5VufP3cE51sdpEcEreWTblga6RGYKrrUu0EKQMP6IRm3bBxCg58/dwSc+fu4LPGwqW97vt7Jf4Rv6j+eKvU6Gs6eEKdZXPn7uCUW9+7gtShbsotwUxA8+Z4n8EBM02NYIatQNlMtBhvZ/hPsFpaQDUO2YVXKdoEOuHDUua5aWFp/Ck7y4p9k5s56c5UuX3uzrWtfLg0Atu4NwkknacFUaH6yB2CfmqdltES4td0j8WmVZFsadEnsBWXcVC55ICyX1RUeXnKd0/n5orNmLr7cR8Q1di65cbZbR+0ZIIlw9F2Sb2dOF3ctfZhBa7PghCELRWohCEIQhcdlqg02iqSBJLPyhdiuKy7XPOKgDZgtxOA+ELO2lPZtj9XoVl7Wjsmz+r0Ko2a0Oov2sOkbRtG9dHQqB7Q5pkHELkra6oROGGMAYrfyJTu0W9IOvEulujHUOHzV2yqtRwLCZA+3+Vh0XGSNy0wFVyjRDg0E6CSp5UNpPyWrVyatOzE1ekrN5g3aUcwbtKtSiUvmtdVuYN2lHMG7SrMpZRJQqvMW7Sl5g3aValEqJKFV5gNpT25PB1lWo2ppfwUyUKDmLRrJKabCNpVmUSolCq8xG0o5iNpVqUSplCrcxG0o5iNpVqUjnxpXD6jWNLnmAN6gkASVWNibtKhNFvapalWexMleYvdr1Huw0SWt47z7DkO9Z1W6LvoyCjzXZ3AJW09/bgAnyiVkitUDsWIzxkylZOLFJnqVKbE0iQTBScxG0ooVrvYdIVreNB0L1+z78XTYOThqPUcuPDpC1aFcVBzVTmI2lHMRtKtShaCvVCuy4Gx9afT2VTOhzrpOA0gnSfZaNudDCdQg8SsUAVHYDDs1bVm3Ih5PevNbRbhuDzg/b3WoCnMcFXFjbv8RTxZm7PMrJdHH7Klsq5ZD02/eHouvXD2KiBUZBPxjXvC7hamzPpd3Lb2UZa/u9UIQhaa1kIQhCELjcu/xFTtZ+ULsl55yinnVfExeGs9Vqpr2ZugGAxBnikNo0u1pgTGfoU2o79FLki2inUzcjNPk6RDHduwrOylTdSstW1RebTYXQHdI4xs1eizeSeTxa7MHjKLqVpcypVqMqsp1GtZTeWF4mCG/DOOtTbbMbbvx9oT0EDzKzKez85xfn3XojLQw6HNPY4KCu7HvXLQA5rLzXklrZZi104XhuOldG92KfrRkn7WjgJKWUsqK8lBVEJ1SyklMkazwS5wahxQhPaJTrwGjEqIVkt8bOCEJxKJTexJeQhSSiVFfRfUQhSyllQ304PQeaCYRUqR2qu50pr6kkpLy8Le3r7qoXH6dw4DpxWJWuDUdrluTpRKbeReSSpxJ0olMvJbyFOJOlSUq5b2bCobyLy7p1H03BzDBG8Ia8tMgq8yoHaMDsSlUab4I7D8lbzi9hsm7fc0jj1aY7iMj5+C17WsarTOoUVsbep1BtEjtBlY9ks9QYtxnDEtjzK2i6e/BYLajHEjQ4Egg6cFpG0ZXPzFLXtqKrg+TkI+8+q06zalOm6o8ANY0ud0hIA2/4S5PvVg5zcA1103tMwCfmBxWS6mhrnDAOIGnBxCj90UJnPolvg2gamV0dCw1A9hlpAc2dWsSuuXnFhtNTO0v2jsX0wZcTheC9HU/CU7fJm/nK0dn0eza7nCEIQhaCEIQhCF59yi/iq33h+Vq9BXn3KL+KrfeH5Qr7f6j0S1z9I6qra7Uzmdop1JLTTqghrXPN0tOgDSdwWTyVyALPZ7r6k1KheXOY2Ia8NDmAnV0BO3sV6q6Gk7Apab4DW7AAmKk7lRSGqWjk9jCHNcZaZEhqvi8frnwsVUPAxdwxCjfaJ/XzWFtHbFO2JY353jduHU+g74VFzfU6PyjN3l1V28R/3Pwt9lE+o7VUdwZ/xVPOKO1VyGkg46uIWGza95c12U2uDMTgMmgxJjfJMdQkBf1qjw0GJIGivgu+0PgYfRHT+0PgZ7Jz7QJgNEd/umc4HVHn7r1lBlRrIqOxHjhDfsCR5LaphzRDjJ4xHqn9P7Q+Bnsml7/tDwp+rVQytbCA270ZmYlPpV5aDtY0/hWRtyvc2zWPpPgOMRhGvMmZnPKB37kb+tUpxhMA/mquBzuu7gz2S51/2jvCz2VQ1kudOryIWBSvto1nYab3E8gPQeaz23NxUMNLj0lWc6/rmeymPROF/XU/Az0VZj47dfooKNp+kwfhumR/aSPNes2fZ16bcVxULnRpOQ5czz8OJ17elUYAajiSd0mB7laHT+0PgYgh/wBofAxNz46o8/dLzgdUfi908Wggg6HkE0c8ijMnXU4NCDTP2h8LVn86JtDhqu4DgrWcS52da/ymf0N9lT2FI/wDwU2Z/wDIfCEuYOqoD/aFBnUudXP7utf5TP6W+yn4el+kKc039Yf7f/smhruuP9s/8lVtNoIY/H6rte5MyPaSWOvdKHANknZj6KP3VaQT2bfBcG2ozGHzVssf1/wtCSHfaHwtUmfGwefukdaRB6I0Hb7rMr/s/Te+ab8I4YcXgSQe5LP2c0ulriBwzPqEyHdf8LU5rn/afgaqNlrktaTsapc9Oj0PkvONo3DLp1KhJc0kSMjkYnkMt5jisxoeKhbTmRwn3Vprnk/vDGGpnsqVXJYcS41HSSSYDRiVZoySGtBJOgayVuWHIJeAX1ANZa0SeJXurRlWjRaKryXbzr3dBoF6GhSeKYxZneZlc9mLrfjJiPiA9FHK622cmmmm4U3uDyMC+CCd8DBYo5P2iYLQNUlwjuhPU6oIzKipRdIwjwVOw/vaX9Sn+YL0pchk3IrGuaarumHtIuHDAgjViuvVNd4cRCvo0X0x8w1QhCFQrkIQhCELz7lD/FV/vD8oXoK8+5Qn6VXwnpDAaT0RgFfb/UeiWufpHVZdoZeaRMaDhuMwsW0crLPTqupEuvNcWvcWi4D34ngr/J7lRYrVVFnNC0MeWOcCalMjoxhgBjHyUmVf+n1kqvfVZVrB7+kb7aRBdGGgBWVmdq0szEzmDB7ilXAYS0mOhzVKyZco1XXWPk4xgQDGmJ0q5nV57yQsNWpa6Yp03BrHONRzg+6ABdcL8fFj8K9Gq2AgwHsdBLTdgwW6jpxXjb/Y5p1QygCRG+MjJHAdfFYF7Tp0HfKchEzuOeuXT81bnVXt1Xod7PVRZXbVs7QTTJDog9J1M6fiLSIKxG25zg6XS7pXA/CmDfBaXOabwjpDshPbH/Z67f2d6AMDXcZJwnOAJ+8eGaut7WsMNXCYBGW/w18Y8M11jqyTPLFoWoOEhztJaZc/SBJ06k/Ofznxu909V2zQpPNOox4c0wQQAR1BctA7UotJBDpHIf8ApWcrVOi3tUtlrSxnYBrWdVa1whzif7np9Go1oDWnAXoxnzKZtb622gHUQ05ZkOAzE9TpvVlK6o3JLAN2hj3K1G1AP/pKXPLPz42jikFob1uC0mUg0YWiB4eSbAAEALRzyqWet9IedjSPIKLnbdUd5lQSy8Xz0naSHH3XQbqpK288jPLHzw6x8Z90mcHWPjPuuOzUyrGei0HePT/Cu55YwDLwfPSGu+46o0SrHORtXZbooWjnkZ5Z3ORtHkjnI2qMCJVq3V/2bu4eaMlVIpne4/IKnVLXiHHCQfiI0diGOptENJj77vdSW/LCFsZ5NfVwPYVk54dY+M+6bnG9Y+M+647NTKv2EzTaZ2/WIOkqzeOxZFGo1outwAnXPzUnORt81yy3psLixoGIyctSeK4axrZwiJ1W/kdofVAcXCIIuj5nUF1rai8+seWn0sGOETJBAM7idK3bHyqpHCoLh3dIeWI4KH03arRtqjA3DoV1YtjgNM9uKjpZSJJBOgxsWNXy9Z2gE1WmRIiSeCza2WM5ddREC9DnOxJaNIAxAOIxKq7MncmZosyeQF1dWztc4VKbodLTEyDBGpba87s9te6pRF4xfpAxAk3hJwjTsXoi4qMLYlKurNqGGmQMkIQhVrlCEIQhC8+5Qn6VW+838rUIV9v9R6Je5+kdVlWfJlnZVNZlJgqm9LmiD0tO6TtW9Tf0QdyELRcAsljiSsWhLWNpU2NZcqPD74IvNDj023dE6ZOmVKQ0TLRfJk3QJB0YxpQheec+KrmxkDzzknWDnG7kADIELzFY4+0edzi3Tdz58+OeplMuMIrQ5zs6Giq11804ILei04CRIMbMVy/KHIwotNZjppglr7xlzXY6QB8OCELW2VcVaVw2HGHOpNIO8PDG582h3y8IAMjJaGyK721hByIZIkxmSPw65nPMrO5IWs1LS9sfsxScYIn6zACeJXaZpvVHAIQtzbTGi6IA3D1Xon5ukozTeqOATcwzqt8ISoWVhGq5hJmGdVvhajMM6rfCEqFCJSZhnVb4QjMM6rfCEqEIRmGdVvhCMwzqt8IQhClGYZ1W+FqMwzqt8IQhCEZhnVb4WozDOq3wtQhCEZhnVb4WozDOo3wtQhCEZhnVb4WpMwzqt8ISoQoSZhnVb4QjMM6rfCEqEIlJmGdVvhCMwzqt8ISoQiUZlvVb4QnsYBgAANwASIQhWbD+9pf1af5gvS0IStxuTltoUIQhLJlf/9k=" alt="">
            <br>
            <img class="frame" src="data:image/jpeg;base64,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" alt="">
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
      new1: "",
      day:"",
      visits: "",
      about:"",
      uid: "",
      opinion:"",
      combo:"",
      desc:"",
      profileExist: false,
    };
  },
  async mounted() {
    this.uid = "14";
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
      this.new1 = roblox.data().new1;
      this.codes = roblox.data().codes;
      this.opinion = roblox.data().opinion;
      this.combo = roblox.data().combo;
    }
  },
  methods: {
    async searchCodes() {
      this.codigos = [];
      const logCode = await fb.tasks4Collection
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
.imgvid{
  padding:300px;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
  padding-top: 10px;
  border: 3px rgba(0, 0, 0, 0.068) solid;
  border-right: none;
  border-bottom: none;
  border-top: none;
  border-radius: 1px;
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
