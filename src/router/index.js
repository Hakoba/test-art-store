import Vue from "vue";
import VueRouter from "vue-router";
import  mainLayout from "../components/layouts/MainLayout"
const prefix = 'Art store: '
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    redirect: 'gallery',
    component: mainLayout,
    children:[
      {
        path: "gallery",
        name: "GalleryView",
        meta: {
          title: prefix + "Кабинет"
        },
        component: () => import("@/components/views/GalleryView.vue")
      },
    ]
  },

];

const router = new VueRouter({
  routes,
});

export default router;
