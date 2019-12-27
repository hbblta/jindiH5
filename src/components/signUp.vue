<template>
    <div class="signDiv">
        <div class="signForm">
          <p>姓 名</p>
          <div><input v-model="signData.name" type="text"></div>
          <p>手 机</p>
          <div><input v-model="signData.mobile"  type="text"></div>
          <p>房 号</p>
          <div>
            <select class="selectHtml">
              <option class="optionHtml">Volvo</option>
              <option>Saab</option>
              <option>Mercedes</option>
              <option>Audi</option>
            </select>
<!--            <input v-model="signData.room"  type="text">-->
          </div>
          <p>{{errorText}}</p>
        </div>
      <div class="signDate">
        <div>报名时间</div>
        <div>2019年12月29-30日</div>
      </div>
      <img class="signUpImg" @click="signFn()" src="https://img.hm8848.com/APP/jd/signUp2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "signUp",
      data(){
        return{
          signData:{
            name:'',
            mobile:'',
            room:'',
          },
          token:'',
          errorBol : false,
          errorText : ''
        }
      },
      created() {
          this.token = localStorage.getItem('token')
      },
      methods:{
        signFn(){
          if(this.signData.name == '' || this.signData.mobile == '' || this.signData.room == ''){
            this.errorText = '请填写完整!'
            return
          }
          this.ajax.post('users',JSON.stringify(this.signData),this.token).then((res) => {
            if(res.code == 0){
              this.goToUrl('tickets')
              this.errorText = ''
            }else {
              this.errorText = res.message
            }
          })
        },
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
    background: url('https://img.hm8848.com/APP/jd/signUp1.jpg') no-repeat;
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
  .optionHtml{
    width:350px;
    height:47px;
    /*padding-left: 10px;*/
    opacity:0.5;
    border: 0;
    margin-top: 6px;
  }
  .selectHtml{
    width:415px;
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
  .errorText{
    position: relative;
    top: 50%;
    left: 50%;
    z-index: 99999;
    font-size: 20px;
    transform: translate(-50%,-50%);
    text-align: center;
  }
</style>
