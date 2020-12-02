import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
// 全局前置守卫 导航触发时候调用 如果使用了这个钩子必须调用next方法才会继续往下执行 to到哪去 from从哪来
router.beforeEach(async(to, from, next) => {
  console.log(store.state.nickname);
  if (store.state.nickname != '') {
    // 证明已经登录了
    if (to.name == 'login') {
      // 并且是login页面 去首页
      next('/');
    } else {
      next();
      store.dispatch('valilogin');
    }
  } else {
    next();
  }
});