import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const defaultPictureData = [
  {id: 1, name: 'Рождение венеры', slug: 'botticelli', author: 'Сандро Ботичелли', price: 1000000, oldPrice: 2000000, sold: false, inCart: false  },
  {id: 2, name: 'Тайная вечеря', slug: 'leonardo', author: 'Леонардо да Винчи', price: 3000000, oldPrice: false, sold: false, inCart: false  },
  {id: 3, name: 'Сотворение Адама', slug: 'mike', author: 'Микеланджелло', price: 5000000, oldPrice: 6000000, sold: false, inCart: true  },
  {id: 4, name: 'Урок анатомии', slug: 'rembrandt', author: 'Рембрант', price: false, oldPrice: false, sold: true, inCart: false  },
]
export default new Vuex.Store({
  state: {
     pictures:[

]
  },
  mutations: {
    setPicturesStore(state, newData){
      state.pictures = newData
    },
    updatePictureState(state, {index, data}){
       state.pictures[index] = data;
       // в тз было сказано чтобы состояния сохранялись при перезагрузке:
      // кладем в локал сторадж, и забираем оттуда чтобы удостовериться, что данные там актуальные
       localStorage.setItem('pictures', JSON.stringify(state.pictures));
      state.pictures= JSON.parse(localStorage.getItem('pictures'));
    },
    setDefaultData(state){
      const localStoragePictures = JSON.parse(localStorage.getItem(('pictures')))
      if(localStoragePictures){
        state.pictures = localStoragePictures;
      }else{
        state.pictures = defaultPictureData;

      }
    }
  },
  actions: {
    async getPosts(){
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
    }
  },
  modules: {},
});
