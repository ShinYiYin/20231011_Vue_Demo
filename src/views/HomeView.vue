<script>
// import {RouterLink, RouterView} from 'vue-router'
// import Header from "./Header.vue"
// export default{
//   data(){
//     return{
//     }
//   },
//   components:{
//     RouterLink,
//     RouterView,
//     Header
//   }
// }
</script>

<template>
  <div class="bgArea">
    <div class="top">
      <div class="name">
        <p class="title">Vue 學習部落格</p>
        <p class="cnName">尹心怡</p>
        <p class="engName">Sally Yin</p>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.bgArea {
  width: 100%;
  height: 90vh;
  background-color: rgb(254, 236, 239);

  .top {
    height: 80%;
    background-color: white;

    &:before {
      content: "";
      position: absolute;
      top: 310px;
      right: 360px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background-color: rgb(255, 171, 185);
    }

    &:after {
      content: "";
      position: absolute;
      top: 80px;
      right: 100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background-color: rgb(255, 205, 213);
    }
    ::before {
      content: "";
      position: absolute;
      top: 480px;
      right: 150px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgb(229, 110, 130);
    }
    ::after {
      content: "";
      position: absolute;
      top: 200px;
      right: 550px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgb(229, 110, 130);
    }
  }
.name{
  padding-top: 120px;
  width: 50%;
  height: 30%;

  .title {
    margin-left: 150px;
    font-size: 50pt;
    font-weight: bolder;
    color: rgb(221, 111, 129);
  }

  .cnName{
    margin-top: 75px;
    margin-left: 440px;
    font-size: 30pt;
    font-weight: bolder;
    color: rgb(221, 111, 129);
    line-height: 20px;
  }
  .engName {
    margin-left: 416px;
    font-size: 30pt;
    font-weight: bolder;
    color: rgb(221, 111, 129);
  }
}
  .bottom {
    z-index: -1;
  }

}
</style>
