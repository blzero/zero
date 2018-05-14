<template>
  <div class="audion">


      <audio controls src="../../../static/轻音乐-青石巷.mp3"></audio>
  </div>
</template>

<script>
import audio from '@/utils/audio'
export default {
  data(){
      return{

      }
  },
  created(){
      this.$nextTick(()=>{
          let au = document.querySelector('audio');
          audio.initAudioWithEle(au);
          console.log(au);
      });
  },
}
</script>
<style lang="stylus" scoped>

</style>
