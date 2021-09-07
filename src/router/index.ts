import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to: any) {
  //@ts-ignore
  return VueRouterPush.call(this, to).catch((err: any) => err);
};

const routes = [
  {
    path: "/",
    redirect: "/list"
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/detail/Index.vue")
  },
  {
    path: "/TopicArea",
    name: "TopicArea",
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/detail/TopicArea.vue")
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "list" */ "@/views/list/Index.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detailNew" */ "@/views/detailNew/Index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
