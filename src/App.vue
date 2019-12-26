<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      musicBol : true
    }
  },

  updated() {

  },
  methods: {

  }
}
</script>

<style>
  html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,legend,button
  form,fieldset,input,textarea,p,blockquote,th,td {
    padding: 0;
    margin: 0;
  }
  /*::-webkit-scrollbar-track { background-color: rgba(0,0,0,0.2);  }*/
  /*::-webkit-scrollbar {  width: 0px;height:8px;  background-color: #F5F5F5;border-radius: 5px;  }*/
  /*::-webkit-scrollbar-thumb { !* *!background: #0C4EA2;border-radius: 5px; }*/
  /*::-webkit-scrollbar-corner{ background-color: #F5F5F5;}*/
  /*html {*/
  /*  !*隐藏滚动条，当IE下溢出，仍然可以滚动*!*/
  /*  -ms-overflow-style:none;*/
  /*  !*火狐下隐藏滚动条*!*/
  /*  overflow:-moz-scrollbars-none;*/
  /*}*/
  /*!*Chrome下隐藏滚动条，溢出可以透明滚动*!*/
  /*html::-webkit-scrollbar{width:0px}*/
  /*#app{*/
  /*  min-width:750px;*/
  /*  height:540px;*/
  /*  background: #EDF0F5;*/
  /*}*/
</style>
