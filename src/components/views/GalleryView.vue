<template>
  <section class="art-gallery">
    <div class="art-gallery__container">
      <h1 class="art-gallery__title">Картины эпохи возраждения</h1>
      <div class="art-gallery__cards">
        <art-card :picture="picture" :index="index" v-for="(picture, index) in pictures" :key="picture.id"></art-card>
      </div>
    </div>
  </section>
</template>

<script>
import ArtCard from "../ui/ArtCard";
import { mapState, mapMutations } from "vuex";

export default {
  components:{
    ArtCard
  },
  name: "art-galleryView",
  computed:{
    ...mapState(['pictures'])
  },
  methods:{
      ...mapMutations(['setDefaultData'])
  },
  created() {
      this.setDefaultData()
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-gallery{
  &__container{
    margin: 45px 0;
  }
  &__cards{
    margin-top: 39px;
    display: flex;
    justify-content: space-between;
  }

}
</style>
