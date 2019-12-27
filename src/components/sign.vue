<template>
    <div class="signDiv">
      <img @click="goToUrl('signUp')" src="https://img.hm8848.com/APP/jd/sign2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "sign",
      methods:{
        goToUrl(url) {
          this.$router.replace({
            path: url,
            // query:{
            //   id:this.id ,
            // }
          })
        }
      }
    }
</script>

<style scoped>
.signDiv{
  width:750px;
  height:1610px;
  background: url('https://img.hm8848.com/APP/jd/sign1.jpg') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
  .signDiv img{
    margin-top: 1245px;
    margin-left: 80px;
    width: 300px;
    height: 90px;
    animation:rubberBand infinite 2s 2s;
  }
@keyframes rubberBand{
  0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}
  15%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}
  20%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1)}
  25%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}
  32%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}
  37%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}
  50%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}
}
</style>
