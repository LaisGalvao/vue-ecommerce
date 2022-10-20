import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import CartView from '@/views/CartView.vue';
import ProductView from '@/views/ProductView.vue';
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/category/:type', name: 'Category', component: CategoryView },
    { path: '/product/:id', name: 'Product', component: ProductView },
    { path: '/cart', name: 'Cart', component: CartView },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router