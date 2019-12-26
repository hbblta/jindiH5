<template>
    <div class="signDiv">
        <div class="signForm">
          <p>姓 名</p>
          <div><input type="text"></div>
          <p>手 机</p>
          <div><input type="text"></div>
          <p>房 号</p>
          <div><input type="text"></div>
        </div>
      <div class="signDate">
        <div>报名时间</div>
        <div>2019年12月28-29日</div>
      </div>
      <img class="signUpImg" @click="goToUrl('tickets')" src="../assets/signUp2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "signUp",
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
    background: url('../assets/signUp1.png') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .signForm{
    margin-top: 450px;
    margin-left: 252px;
    width:429px;
    height:445px;
    border: 1px #FFFFFF solid;
    border-radius: 20px;
    text-align: center;
  }
  .signForm p{
    height: 66px;
    line-height: 66px;
    font-size:25px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .signForm div{
    width:100%;
    height:58px;
    border-bottom: 1px #FFFFFF solid;
    border-top: 1px #FFFFFF solid;
  }
  .signForm div input{
    width:405px;
    height:47px;
    padding-left: 10px;
    opacity:0.5;
    border: 0;
    margin-top: 6px;
  }
  .signDate{
    margin-left: 200px;
    margin-top: 45px;
  }
  .signDate div{
    line-height:50px;
    font-size:25px;
    font-family:PingFangSC;
    color:rgba(255,255,255,1);
    text-align: center;
  }
  .signUpImg{
    margin-top: 40px;
    margin-left: 320px;
    width: 310px;
    height: 90px;
  }
</style>
