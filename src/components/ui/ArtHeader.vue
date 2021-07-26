<template>
  <header class="art-header">
    <div class="art-header__container container">
      <div class="art-header__nav">
        <picture class="art-header__image">
          <img src="@/assets/images/lightLogo.svg" width="48" height="48" />
        </picture>

        <a href="#" class="art-header__item">Каталог</a>
        <a href="#" class="art-header__item">Доставка</a>
        <a href="#" class="art-header__item">Оплата</a>
        <a href="#" class="art-header__item">Контакты</a>
        <a href="#" class="art-header__item">О галерее</a>
      </div>
      <div class="art-header__search">
        <art-search
          placeholder="Поиск по названию картины"
          v-model="search"
        ></art-search>
      </div>
    </div>
  </header>
</template>

<script>
import ArtSearch from "./ArtSearch";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ArtHeader",
  components: {
    ArtSearch,
  },
  computed: {
    ...mapState({
      storeSearch: "search",
    }),
    search: {
      get() {
        return this.storeSearch;
      },
      set(newVal) {
        this.setSearch(newVal);
      },
    },
  },
  methods: {
    ...mapMutations(["setSearch"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-header {
  height: 98px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  &__image {
    margin-right: 48px;
  }
  &__nav {
    display: inline-flex;
    align-items: center;
  }
  &__item + &__item {
    margin-left: 48px;
  }
  &__item {
    color: var(--color-text);
    text-decoration: none;
  }
}
</style>
