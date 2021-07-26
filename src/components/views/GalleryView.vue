<template>
  <section class="art-gallery">
    <div class="art-gallery__container">
      <h1 class="art-gallery__title">Картины эпохи возраждения</h1>
      <transition-group name="list" class="art-gallery__cards">
        <art-card
          :picture="picture"
          :index="index"
          v-for="(picture, index) in getFilteredPictures"
          :key="picture.id"
        ></art-card>
      </transition-group>
    </div>
  </section>
</template>

<script>
import ArtCard from "../ui/ArtCard";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ArtCard,
  },
  name: "art-galleryView",
  computed: {
    ...mapGetters(["getFilteredPictures"]),
  },
  methods: {
    ...mapMutations(["setDefaultData"]),
  },
  created() {
    this.setDefaultData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-gallery {
  &__container {
    margin: 45px 0;
  }
  &__cards {
    margin-top: 39px;
    display: flex;
    justify-content: space-between;
  }
  &__cards + &__cards {
    margin-left: 20px;
  }
}
</style>
