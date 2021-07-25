<template>
  <div class="art-card" >
    <div class="art-card__overlay" :class="{'art-card__overlay_sold': picture.sold}"></div>
    <div class="art-card__image">
        <img :src="require(`@/assets/images/${picture.slug}.png`)" alt="">
    </div>
    <div class="art-card__body">
      <h2 class="art-card__text" v-show="picture.name">
        «{{picture.name}}»
      </h2>
      <h2 class="art-card__text">
        {{picture.author}}
      </h2>
    </div>
    <div class="art-shop art-card__actions">
        <h3 class="art-shop__sold-info" v-if="picture.sold">Продана на аукционе</h3>
        <div class="art-shop__main" v-else>
            <div class="art-shop__price-container" >
              <h3 class="art-shop__old-price" v-if="picture.oldPrice">{{picture.oldPrice.toLocaleString()}} $</h3>
              <h3 class="art-shop__current-price">{{picture.price.toLocaleString()}} $</h3>
            </div>
            <art-button @click="togglePictureCartState()" :loading="isLoading" :icon="picture.inCart ? 'check': false" :done="picture.inCart" >

              {{ picture.inCart ? 'В корзине' : 'Купить'  }}</art-button>
        </div>
    </div>
  </div>
</template>

<script>
import ArtButton from "./ArtButton";
import { mapActions, mapMutations } from "vuex";
export default {
  components: { ArtButton },
  name: "ArtCard.vue",
  props:{
    picture: {
      type: Object,
      require: true
    },
    index:{
      type: Number,
      require: true
    }
  },
  data(){
    return{
      isLoading: false
    }
  },

  methods:{
    ...mapActions({
      togglePictureAsync: 'getPosts'
    }),
    ...mapMutations(['updatePictureState']),

    async togglePictureCartState(){
      this.isLoading = true;
      try {

        await this.togglePictureAsync();
        const updatedPicture =  JSON.parse(JSON.stringify({...this.picture, inCart: !this.picture.inCart}))
        console.log('updatedPic',updatedPicture)
        this.updatePictureState({index: this.index,data: updatedPicture})
      }
      catch (e) {
        console.warn(e)
      }
      finally {
        this.isLoading = false;
      }


    }

  },
};
</script>

<style scoped lang="scss">
.art-card{
  position: relative;
  &__overlay{
    display: none;
    &_sold{
      display: block;
      background-color: rgba(255,255,255,0.4);
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      cursor: not-allowed;
    }
  }
  border: 1px solid var(--color-border);
  width: 280px;
  &__image{

  }
  &__body{
    margin:   20px 24px;

  }
  &__actions{
    margin: 26px 20px;
  }
}
.art-shop{
  &__sold-info{
    padding-top: 10px;
  }
  &__main{
    display: flex;
    justify-content: space-between;
    align-items: stretch;

  }
  &__price-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__old-price{
    text-decoration: line-through;
    color: #A0A0A0;
  }
}

</style>