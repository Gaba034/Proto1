<template>
  <div class="page-loader" v-if="isLoading">
    <div class="cube"></div>
    <div class="cube"></div>
  </div> 
</template>

<script>
  export default {
    data() {
    return{
    isLoading: true}
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 2500)
  }
  }
</script>

<style lang="scss" scoped>
   $colors: #e6e6e6,rgb(0, 0, 0);

  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.712);
    z-index: 999;
  }
  .cube{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        background-color: nth($colors, $i);
      }
    }
    &:first-child{
        animation: left 1s infinite .5s;
        position: absolute;
        height: 200px;
        width: 200px;
    }
    &:last-child {
      animation: right 1s infinite .5s;
    }
  }
  @keyframes right {
    10%{
        background-color: rgb(0, 0, 0);
    }
    40% {
      transform:rotate(180deg);
    }
    50% {
      
      transform:rotate(-360deg);
    }
    100%{
       filter: 0px;
    }
  }
  @keyframes left {
    10%{
        background-color: rgb(197, 197, 197);
        filter: blur(5px);
    }
    20%{
        filter: unset;
    }
    40% {
      transform:rotate(0deg);
      filter: blur(30px)
    }
    50% {
      
      transform:rotate(-360deg);
    }
    100%{
        filter: blur(0px);
    }
  }
</style>