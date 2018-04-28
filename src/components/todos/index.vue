<template>
    <div class="todo">
        <div class="user-name">
            <input type="text" placeholder="name" v-model="name">
            <button v-show="text" @click="addAction" class="add-btn">Add</button>
        </div>
        <div class="text-content">
            <textarea name="" id="" v-model="text" placeholder="content" ></textarea>
        </div>  

        <ul class="todo-list" v-if="toDoList" >
            <transition-group name="list" tag="div">
                <li v-for="(item,index) in toDoList" :key="index">
                   <div class="todo-content">
                    <p class="left-info">
                        <span class="todo-name"> {{item.user}}</span>
                        <span class="todo-c-time">{{item.create | time}}</span>
                        :
                    </p>
                      
                      <p class="right-text">
                            {{item.text}}
                      </p>
                   </div>
                    <img src="../../assets/del.png" @click="removeToDo(index)" alt="">
                </li>
            </transition-group>
        </ul>
       
    </div>
</template>


<script>
import { mapGetters ,mapMutations} from 'vuex'
export default {
    data:function(){
        return {
            name:'',
            text:''
        }
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
    computed:{
      ...mapGetters({
          'toDoList':'toDoList'
      })
    },

    methods:{
        addAction(){
            if(!this.text) return;
            var user = this.name;
            var create = Date.now();
            var text = this.text;

            var temp = {
                user,
                create,
                text
            }
            this.addToDo(temp);

            this.name = '';
            this.text = '';
        }
        ,
        ...mapMutations({
            'addToDo':'addToDo',
            'removeToDo':'removeToDo',
        })
    }
  
}
</script>

<style lang="stylus" scoped>
    inWidth = 100%;
    inHeight = 40px;
    inPddingLR = 10px


    .todo{
        max-width  768px;
        margin 0 auto;
    }
    @media (max-width:768px){
         .todo{
            // padding 0 15px;
        }
    }

    .user-name{
        display: flex;
        justify-content: center;
        align-items: center;
       
        input{
            height inHeight;
            width inWidth
            margin 10px 0;
            padding  0 inPddingLR;
            &:focus{
                border-bottom 1px solid #f99;
            }
        }

        .add-btn{
            width 60px;
            height inHeight;
            background #567;
            color #fff;
        }
    }
    .text-content{
        textarea {
            width inWidth;
            height 60px;
            resize none 
            padding  0 inPddingLR;
        }
    }

    .todo-list{
        // padding 0 15px;
        li{
            padding 15px 0;
            border-radius 3px;
            margin-bottom 10px;
            background #fff;
            box-shadow 1px 2px 2px #777;
            transition all 0.3s;
            display flex;
            justify-content center;
            align-items center;
            &:hover{
                transform  rotateX(5deg) translateZ(20px)
            }
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
                height 25px;
                width 25px;
                margin 0 10px 
            }
        }
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
 
</style>

