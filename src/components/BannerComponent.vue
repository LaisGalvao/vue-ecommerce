<template>
  <div class="banner">
    <img src="../assets/banner-1.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner img {
  margin-top: 1%;
  height: 300px;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
}

@media screen and (max-width:768px) {
  .banner img{
    margin-top: 10%;
  }
}
</style>