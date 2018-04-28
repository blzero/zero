import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const ToDo = () => import('@/components/todos/index')

Vue.use(Router)

const  router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name:'ToDo',
      component:ToDo,
      meta: {
        title: 'todolist'
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

export default router;