<template>
  <span class="art-search">
    <label class="art-search__label" :class="{ 'is-focus': isFocus }">
      <input
        class="art-search__input"
        :value="value"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
    </label>
    <art-button class="art-search__button">Поиск</art-button>
  </span>
</template>

<script>
import ArtButton from "./ArtButton";

export default {
  name: "ArtSearch",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {
    ArtButton,
  },
  data() {
    return {
      isFocus: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-search {
  display: flex;

  .art-search__label {
    box-sizing: border-box;
    position: relative;
    border: 1px solid var(--color-border);
    border-right: 0;
    border-radius: 0;
    width: 100%;
    transition: border-color linear 0.15s;
    &.is-focus {
      border-color: #b5b5b5;
      border-right: none;
    }

    .art-search__input {
      min-width: 294px;
      display: block;
      width: 100%;
      height: 46px;
      padding: 0 16px 0 16px;
      color: #1d1d1b;
      border: none;
      outline: 0;
      background-color: #fff;

      &::placeholder {
        color: #9f9f9f;
      }
    }
  }
  .art-search__button {
    padding: 13px 36px;
  }
}
</style>
