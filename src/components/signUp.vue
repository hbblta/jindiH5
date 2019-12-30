<template>
    <div class="signDiv">
        <div class="signForm">
          <p>姓 名</p>
          <div><input v-model="signData.name" type="text"></div>
          <p>手 机</p>
          <div><input v-model="signData.mobile"  type="text"></div>
          <p>房 号</p>
          <div>
            <select v-model="signData.room" class="selectHtml">
              <option v-for="item in roomList">{{item}}</option>
            </select>
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
          errorText : '',
          roomList:[
            "4-1-101",
            "4-1-102",
            "4-1-201",
            "4-1-202",
            "4-1-301",
            "4-1-302",
            "4-1-401",
            "4-1-402",
            "4-1-501",
            "4-1-502",
            "4-1-601",
            "4-1-602",
            "4-1-701",
            "4-1-702",
            "4-1-801",
            "4-1-802",
            "4-1-901",
            "4-1-902",
            "4-1-1001",
            "4-1-1002",
            "4-1-1101",
            "4-1-1102",
            "4-1-1201",
            "4-1-1202",
            "4-1-1301",
            "4-1-1302",
            "4-1-1401",
            "4-1-1402",
            "4-1-1501",
            "4-1-1502",
            "4-1-1601",
            "4-1-1602",
            "4-2-101",
            "4-2-102",
            "4-2-201",
            "4-2-202",
            "4-2-301",
            "4-2-302",
            "4-2-401",
            "4-2-402",
            "4-2-501",
            "4-2-502",
            "4-2-601",
            "4-2-602",
            "4-2-701",
            "4-2-702",
            "4-2-801",
            "4-2-802",
            "4-2-901",
            "4-2-902",
            "4-2-1001",
            "4-2-1002",
            "4-2-1101",
            "4-2-1102",
            "4-2-1201",
            "4-2-1202",
            "4-2-1301",
            "4-2-1302",
            "4-2-1401",
            "4-2-1402",
            "4-2-1501",
            "4-2-1502",
            "4-2-1601",
            "4-2-1602",
            "5-201",
            "5-202",
            "5-203",
            "5-204",
            "5-301",
            "5-302",
            "5-303",
            "5-304",
            "5-401",
            "5-402",
            "5-403",
            "5-404",
            "5-501",
            "5-502",
            "5-503",
            "5-504",
            "5-601",
            "5-602",
            "5-603",
            "5-604",
            "5-701",
            "5-702",
            "5-703",
            "5-704",
            "5-801",
            "5-802",
            "5-803",
            "5-804",
            "5-901",
            "5-902",
            "5-903",
            "5-904",
           "5-1001",
           "5-1002",
           "5-1003",
           "5-1004",
           "5-1101",
           "5-1102",
           "5-1103",
           "5-1104",
           "5-1201",
           "5-1202",
           "5-1203",
           "5-1204",
           "5-1301",
           "5-1302",
           "5-1303",
           "5-1304",
           "5-1401",
           "5-1402",
           "5-1403",
           "5-1404",
           "5-1501",
           "5-1502",
           "5-1503",
           "5-1504",
           "5-1601",
           "5-1602",
           "5-1603",
           "5-1604",
           "6-101",
           "6-102",
           "6-201",
           "6-202",
           "6-301",
           "6-302",
           "6-401",
           "6-402",
           "6-501",
           "6-502",
           "6-601",
           "6-602",
           "6-701",
           "6-702",
           "6-801",
           "6-802",
           "6-901",
           "6-902",
           "6-1001",
           "6-1002",
           "6-1101",
           "6-1102",
           "6-1201",
           "6-1202",
           "6-1301",
           "6-1302",
           "6-1401",
           "6-1402",
           "6-1501",
           "6-1502",
           "6-1601",
           "6-1602",
           "7-101",
           "7-102",
           "7-103",
           "7-104",
           "7-201",
           "7-202",
           "7-203",
           "7-204",
           "7-301",
           "7-302",
           "7-303",
           "7-304",
           "7-401",
           "7-402",
           "7-403",
           "7-404",
           "7-501",
           "7-502",
           "7-503",
           "7-504",
           "7-601",
           "7-602",
           "7-603",
           "7-604",
           "7-701",
           "7-702",
           "7-703",
           "7-704",
           "7-801",
           "7-802",
           "7-803",
           "7-804",
           "7-901",
           "7-902",
           "7-903",
           "7-904",
           "7-1001",
           "7-1002",
           "7-1003",
           "7-1004",
           "7-1101",
           "7-1102",
           "7-1103",
           "7-1104",
           "7-1201",
           "7-1202",
           "7-1203",
           "7-1204",
           "7-1301",
           "7-1302",
           "7-1303",
           "7-1304",
           "7-1401",
           "7-1402",
           "7-1403",
           "7-1404",
           "7-1501",
           "7-1502",
           "7-1503",
           "7-1504",
           "7-1601",
           "7-1602",
           "7-1603",
           "7-1604",
           "8-1-101",
           "8-1-102",
           "8-1-201",
           "8-1-202",
           "8-1-301",
           "8-1-302",
           "8-1-401",
           "8-1-402",
           "8-1-501",
           "8-1-502",
           "8-1-601",
           "8-1-602",
           "8-1-701",
           "8-1-702",
           "8-1-801",
           "8-1-802",
           "8-1-901",
           "8-1-902",
           "8-1-1001",
           "8-1-1002",
           "8-1-1101",
           "8-1-1102",
           "8-1-1201",
           "8-1-1202",
           "8-1-1301",
           "8-1-1302",
           "8-1-1401",
           "8-1-1402",
           "8-1-1501",
           "8-1-1502",
           "8-1-1601",
           "8-1-1602",
           "8-2-101",
           "8-2-102",
           "8-2-201",
           "8-2-202",
           "8-2-301",
           "8-2-302",
           "8-2-401",
           "8-2-402",
           "8-2-501",
           "8-2-502",
           "8-2-601",
           "8-2-602",
           "8-2-701",
           "8-2-702",
           "8-2-801",
           "8-2-802",
           "8-2-901",
           "8-2-902",
           "8-2-1001",
           "8-2-1002",
           "8-2-1101",
           "8-2-1102",
           "8-2-1201",
           "8-2-1202",
           "8-2-1301",
           "8-2-1302",
           "8-2-1401",
           "8-2-1402",
           "8-2-1501",
           "8-2-1502",
           "8-2-1601",
           "8-2-1602",
          ]
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
  select::-ms-expand { display: none; }
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
  .selectHtml{
    width:415px;
    height:47px;
    padding-left: 10px;
    opacity:0.5;
    border: 0;
    background: #FFFFFF;
    margin-top: 6px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
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
