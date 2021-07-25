<template>
  <div>
    <art-header></art-header>
    <hr>
    <main class="home container">
      <router-view></router-view>
    </main>
    <art-footer></art-footer>

  </div>
</template>

<script>
import ArtHeader from "../ui/ArtHeader";
import ArtFooter from "../ui/ArtFooter";

export default {
  components:{
    ArtHeader,
    ArtFooter
  },

  name: "MainLaylout",

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {

}

.home__container {

}


</style>
