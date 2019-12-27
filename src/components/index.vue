<template>
  <div class="indexHtml">
    <img src="https://img.hm8848.com/APP/jd/index1.png" alt="">
    <img src="https://img.hm8848.com/APP/jd/index2.png" alt="">
    <img src="https://img.hm8848.com/APP/jd/index3.png" alt="">
    <img src="https://img.hm8848.com/APP/jd/index4.png" alt="">
    <img @click="goToUrl('sign')" src="https://img.hm8848.com/APP/jd/index5.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
      }
    },
    mounted() {
    },
    created() {
      var that = this
      // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4420c343d1a47a60&redirect_uri=https%3A%2F%2Fjd.zjdandaotech.com&response_type=code&scope=snsapi_base&state=#wechat_redirect'
      // this.ajax.get('categories?pattern=index').then((res) => {
      //   this.list = res.data
      // })
      // this.ajax.get('banners?pattern=index').then((res) => {
      //   this.bannersList = res.data
      // })
      // this.ajax.get('storedobjects/indexqrcode').then((res) => {
      //   this.erweiList = res.data
      // })
      // localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOiJvX1l0ZTFFVTQyUjB1NTBMS1gyTE9VQjRhWGo0In0.y_LcQpHC1Ip06pZN6uAkImjYuFz7E-ZHyFeL4IfdFRc')
      if(localStorage.getItem('token')){
        this.ajax.gets('users',localStorage.getItem('token')).then((res) => {
          if(res.code == 401){
            localStorage.removeItem('token');
          }
          if(res.name != '' && res.mobile != '' && res.room != ''){
            this.goToUrl('tickets')
          }
        })
      }else {
        const getLogin = () => {
          let url = 'https%3A%2F%2Fjd.zjdandaotech.com%2Findex.html' // 重定向返回地址
          let wxappid = 'wx4420c343d1a47a60' // 微信公众号appid
          let str = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wxappid + '&redirect_uri=' + url + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
          window.location.href = str
        }
        var WXcode
        var WXInfo = localStorage.getItem('WXInfo') ? JSON.parse(localStorage.getItem('WXInfo')) : 'noLogin'
        let str = window.location.href
        var ua = navigator.userAgent.toLowerCase()
        var isWeixin = ua.indexOf('micromessenger') !== -1 // 是否 在微信浏览器内
        let isURL = window.location.href.indexOf('code=') === -1 // 是否 没有授权重定向回来
        if (isWeixin && WXInfo === 'noLogin' && isURL) {
          getLogin()
        }
// // 重定向回来
        if (!isURL) {
          let num1 = str.indexOf('code=')
          let num2 = str.indexOf('&state=')
          WXcode = str.slice(num1 + 5, num2)
          localStorage.setItem('WXcode', JSON.stringify(WXcode))
          that.ajax.get('login?code='+WXcode).then((res) => {
            if(res.code == 0){
              localStorage.setItem('token', res.token)
            }
          })
        }
      }

    },
    methods: {
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
  .indexHtml{
    width:750px;
    height:1610px;
    background: url('https://img.hm8848.com/APP/jd/backgroundIndex.jpg') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .indexHtml img:nth-child(1){
    display: block;
    padding-top: 36px;
    padding-left: 38px;
    width:261px;
    height:24px;
    opacity: 0;
    animation:one 1s 0.5s;
    animation-fill-mode:forwards;
  }
  .indexHtml img:nth-child(2){
    display: block;
    padding-top: 82px;
    margin: 0 auto;
    width:192px;
    height:172px;
    opacity: 0;
    animation:three 2s 0.5s;
    animation-fill-mode:forwards;
  }
  .indexHtml img:nth-child(3){
    display: block;
    padding-top: 73px;
    margin: 0 auto;
    width:268px;
    height:620px;
    opacity: 0;
    animation:four 1s 0.5s;
    animation-fill-mode:forwards;
  }
  .indexHtml img:nth-child(4){
    display: block;
    padding-top: 200px;
    opacity: 0;
    margin: 0 auto;
    width:206px;
    height:124px;
    animation:two 1s 1s;
    animation-fill-mode:forwards;
  }
  .indexHtml img:nth-child(5){
    display: block;
    opacity: 0;
    margin: 0 auto;
    width:201px;
    padding-top: 20px;
    height:63px;
    animation:three 1s 1s,rubberBand infinite 2s 2s;
    animation-fill-mode:forwards;
  }
  @keyframes one
  {
    from {    padding-top: 0px;opacity: 0}
    to {    padding-top: 36px;opacity: 1}
  }
  @keyframes two
  {
    from {    padding-top: 700px;opacity: 0}
    to {    padding-top: 200px;opacity: 1}
  }
  @keyframes three
  {
    from {    opacity: 0;}
    to {   opacity: 1;}
  }
  @keyframes four
  {
    from {    opacity: 0;transform: scale(2)}
    to {   opacity: 1;transform: scale(1)}
  }
  @keyframes five
  {
    from {    width:201px;height: 63px}
    to {   width:251px;height: 50px}
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
