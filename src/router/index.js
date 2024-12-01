import Vue from 'vue';
import Router from 'vue-router';
import RegisterUser from '@/components/RegisterUser.vue';
import LoginUser from '@/components/LoginUser.vue';
import AddPlace from '@/components/AddPlace.vue';
import PlaceDetail from '@/components/PlaceDetail.vue';
import UserPlace from '@/components/UserPlace.vue';
import HomePage from '@/components/HomePage.vue';

Vue.use(Router);


export const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: RegisterUser
    },
    {
        path: "/login",
        name: "LoginUser",
        component: LoginUser,
    },
    {
        path: "/add-place",
        name: "AddPlace",
        component: AddPlace,
    },
    {
      path:"/place-detail",
      name:"PlaceDatail",
      component: PlaceDetail
    },
    {
        path:"/user/:id",
        name:"UserPLace",
        component: UserPlace
      },
];

    export default new Router({
        mode: 'history',
        routes,
    });
    