<template>
 <footer class="art-footer">

   <div class="art-footer__container container">
   <div class="art-footer__nav">
     <picture class="art-footer__image">

       <img src="@/assets/images/darkLogo.svg" width="48" height="48">
     </picture>

     <a href="#" class="art-footer__item">Каталог</a>
     <a href="#" class="art-footer__item">Доставка</a>
     <a href="#" class="art-footer__item">Оплата</a>
     <a href="#" class="art-footer__item">Контакты</a>
     <a href="#" class="art-footer__item">О галерее</a>
   </div>
   <div class="art-footer__contacts">
     <div class="art-footer__tel">
       <img src="@/assets/icons/phone.svg" width="16" alt="phone">
       <a class="art-footer__number" href="tel:+74955555555">+7 (495) 555-55-55</a>

     </div>
     <div class="art-footer__address">
       <img src="@/assets/icons/adress.svg" width="16" alt="address">
       <span class="art-footer__location">г. Москва, ул. Расплетина, 24</span>
     </div>
   </div>
   </div>
 </footer>
</template>

<script>

export default {
  name: "Artfooter",
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.art-footer{
  height: 98px;
  background: #ECEAEA;
  position: fixed;
  bottom: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &__container{
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  &__image{
    margin-right: 48px;
  }
  &__nav{
    display: inline-flex;
    align-items: center;
  }
  &__item + &__item {
    margin-left: 48px;
  }
  &__item{
    color: var(--color-text);
    text-decoration: none;
  }
  &__contacts{
    display: flex;
    justify-content: space-between;
  }
  &__tel,&__address{
    display: flex;
    margin-left: 48px
  }
  &__number, &__location{
    color: var(--color-text);
    text-decoration: none;
    word-break: unset;
    margin-left: 8px;
  }
}

</style>
