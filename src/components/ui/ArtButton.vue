<template>
 <button class="art-button" @click="$emit('click')" :disabled="loading" :class="{'art-button_done': done}">
   <div class="art-button__icon" v-if="(hasIcon || icon) && !loading">
   <slot  name="icon">
     <img class="art-button__image" :src="require(`@/assets/icons/${icon}.svg`)" alt="">
   </slot>
   </div>
   <span class="art-button__icon" v-else-if="loading">
     <img class="art-button__image" src="@/assets/icons/loader.svg" alt="">
   </span>
     <slot>
 </slot></button>
</template>

<script>
export default {
  name: "ArtButton",
  props: {
    done: {
      type: Boolean,
      required: false,
      default: false
    },
    loading:  {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: [String,Boolean],
      required:false,
      validator: function (value) {
        return ['check', false].indexOf(value) !== -1
      },
    }
  },
  computed:{
    hasIcon(){
      return this.$slots.icon
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-button{
  background-color: var(--button-main);
  display: inline-flex;
  align-items: center;
  color: white;
  padding: 10px 15px;
  height: 48px;
  border: none;
  transition: background-color linear 0.15s;
  &:hover{
    background-color: #776763;
  }
  &:disabled{
    background: #C1B4B1;
  }
  &__image{
    display: inline;
  }
  &__icon{
      display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    left: -4px;
    }
  &_done{
    padding: 10px;
    background-color: var(--button-secondary);
  }

}
</style>
