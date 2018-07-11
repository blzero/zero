<template>
   <div class="content">
        <div class="todo-content">
            <p class="left-info">
                <span class="todo-name"> {{data.user}}</span>
                <span class="todo-c-time">{{data.create | time}}</span>
                :
            </p>
            
            <p class="right-text">
                {{data.text}}
            </p>
        </div>
        <img src="../../assets/del.png" @click="removeToDo" alt="">
   </div>

</template>
<script>
export default {
    props:{
        data:Object,
        index:Number,
    },
    data(){
        return{

        }
    },
    methods:{
        removeToDo(){
            this.$emit('remove',this.index);
        },
    },
     filters:{
        time(value){
            var date = new Date(value);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();

            var h = date.getHours();
            var M = date.getMinutes();
            var s = date.getSeconds();
            // ${h > 10?h:'0'+h}:${M}:${s}
            return `${y}/${m}/${d} `;
        }
    },

}
</script>

<style lang="stylus" scoped>
.content{
     display flex;
    justify-content center;
    align-items center;
     .todo-content{
        flex 1;
        display flex;
        .left-info{
            flex 0 0 auto;
            display flex;
            felx-direction column;
            padding 0 15px;
            color #666;
            .todo-name{
                padding 0 15px;
            }
        }
        .right-text{
            flex 1;
            text-align left 
        }
    }
     img{
        height 15px;
        width 15px;
        margin 0 10px 
    }
}
   
    
           
</style>
