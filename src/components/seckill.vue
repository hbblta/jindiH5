<template>
    <div class="signDiv">
      <img v-if="code == 403" class="seckill1" @click="goToUrl('tickets')" src="https://img.hm8848.com/APP/jd/seckill2.png" alt="">
      <img v-if="code == 0 && success" class="seckill2" src="https://img.hm8848.com/APP/jd/seckill3.png" alt="">
      <img v-if="code == 0 && !success" class="seckill3" src="https://img.hm8848.com/APP/jd/seckill4.png" alt="">
      <div class="errorText" v-if="code != 0 && code != 403">{{errorText}}</div>
    </div>
</template>

<script>
    export default {
        name: "seckill",
      data(){
          return{
            token:'',
            code : 9999,
            success : '',
            errorTexts:'',
          }
      },
      created() {
        this.token = localStorage.getItem('token')
        this.ajax.post('sec','',this.token).then((res) => {
          if(res.code == 401 || res.code == 402 || res.code == 404 || res.code == -1){
            localStorage.removeItem('token')
            this.goToUrl('/')
            this.errorTexts = res.message
            return
          }
          this.code = res.code
          this.success = res.success
        })
      },
      methods:{
        goToUrl(url) {
          this.$router.replace({
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
    background: url('https://img.hm8848.com/APP/jd/seckill1.jpg') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position:relative;
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
  .seckill3{
    height: 509px;
  }
  .errorText{
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
    text-align: center;
    position: absolute;
    font-size: 25px;
  }
</style>
