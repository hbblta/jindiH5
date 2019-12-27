<template>
  <div id="app">
    <router-view/>
        <div class="music" :class="musicBol ? 'on' : ''" @click="playClicked()"></div>
        <audio
          id="videos"
          ref="videos"
          loop="loop"
          style="display: none"
          x-webkit-airplay="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          playsinline="true"
          src="https://img.hm8848.com/APP/BGM.mp3" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      musicBol : false,
    }
  },
  mounted() {
    var that =this
    document.addEventListener('WeixinJSBridgeReady',function(){
      document.getElementById('videos').play()
      that.musicBol = true
    },false);
  },
  methods: {
    playClicked(){
      if(!this.$refs.videos.paused){
        this.musicBol = false
        this.$refs.videos.pause()
      }else{
        this.musicBol = true
        this.$refs.videos.play()
      }

    },
  }
}
</script>

<style>
  html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,legend,button
  form,fieldset,input,textarea,p,blockquote,th,td {
    padding: 0;
    margin: 0;
  }

  .music{
    position: fixed;
    right: 15px;
    top: 15px;
    display: block;
    z-index: 9;
    width: 50px;
    height: 50px;
    background: white;
    background-size: contain;
    cursor:pointer;
    user-select: none;
    -webkit-mask-image: url('https://img.hm8848.com/APP/jd/units-icons.png');
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
