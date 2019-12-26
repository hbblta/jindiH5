<template>
    <div class="signDiv">
      <img @click="goToUrl('signUp')" src="../assets/sign2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "sign",
      methods:{
        goToUrl(url) {
          this.$router.push({
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
  background: url('../assets/sign1.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
  .signDiv img{
    margin-top: 1245px;
    margin-left: 80px;
    width: 300px;
    height: 90px;
  }
</style>
