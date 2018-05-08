<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <transition :name="transitionName" mode="out-in">
        <router-view/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      transitionName:'slide-right',
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
     
    }
  }
}
</script>

<style lang="stylus" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-right-enter-active, .slide-right-leave-active {
  transition all 0.5s;
}
.slide-right-enter, .slide-right-leave-to  {
  transform translateX(-100px);
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active {
 transition all 0.5s;
}
.slide-left-leave-to{
  opacity: 0;
}
.slide-left-enter {
  transform translateX(100px);
  opacity: 0;
}

</style>
