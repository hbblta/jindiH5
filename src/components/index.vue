<template>
  <div class="indexHtml">
    <img src="../assets/index1.png" alt="">
    <img src="../assets/index2.png" alt="">
    <img src="../assets/index3.png" alt="">
    <img src="../assets/index4.png" alt="">
    <img @click="goToUrl('sign')" src="../assets/index5.png" alt="">
<!--    <div class="music" :class="musicBol ? 'on' : ''" @click="playClicked()"></div>-->
<!--    <audio ref="audio"  controls="controls"  src="../assets/BGM.mp3" />-->
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        musicBol : false
      }
    },
    mounted() {
      // setTimeout(()=>{
      //   this.$refs.audio.play()
      // },1000)
    },
    created() {
      // this.ajax.get('categories?pattern=index').then((res) => {
      //   this.list = res.data
      // })
      // this.ajax.get('banners?pattern=index').then((res) => {
      //   this.bannersList = res.data
      // })
      // this.ajax.get('storedobjects/indexqrcode').then((res) => {
      //   this.erweiList = res.data
      // })
    },
    methods: {
      playClicked(){
        let audio = new Audio();
        audio.src = "../assets/BGM.mp3";
        if(audio.paused) {
          audio.play();
          this.musicBol = true
        }else{
          audio.pause();
          this.musicBol = false
        }
      },
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
  .indexHtml{
    width:750px;
    height:1610px;
    background: url('../assets/backgroundIndex.jpg') no-repeat;
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
  .music{
    position: fixed;
    right: 5px;
    top: 5px;
    display: block;
    z-index: 9;
    width: 30px;
    height: 30px;
    background: white;
    background-size: contain;
    -webkit-mask-image: url('../assets/units-icons.png');
    -webkit-mask-size: cover;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: 0 0;
  }
  .on{
    animation: reverseRotataZ 1.2s linear infinite;
  }
  @keyframes reverseRotataZ{
    0%{-webkit-transform:rotate(0deg)}
    100%{-webkit-transform:rotate(-360deg)}
  }
</style>
