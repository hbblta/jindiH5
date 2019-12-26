<template>
    <div class="signDiv">
      <img class="seckill1" @click="goToUrl('tickets')" src="../assets/seckill2.png" alt="">
<!--      <img class="seckill2" src="../assets/seckill3.png" alt="">-->
<!--      <img class="seckill3" src="../assets/seckill4.png" alt="">-->
    </div>
</template>

<script>
    export default {
        name: "seckill",
      methods:{
        goToUrl(url) {
          this.$router.push({
            path: url,
            // query:{
            //   id:this.id ,
            // }
          })
        },
      }
    }
</script>

<style scoped>
  .signDiv{
    width:750px;
    height:1610px;
    background: url('../assets/seckill1.png') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .signDiv img{
    width: 576px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .seckill1{
    height: 375px;
  }
  .seckill2{
    height: 561px;
  }
  .seckill{
    height: 509px;
  }
</style>
