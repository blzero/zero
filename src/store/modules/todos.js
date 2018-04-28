
import {localStore} from '../../utils/index'
export default {
    state:{
        todoList:localStore.getStore('todo') || [],
    },
    getters:{
        toDoList(state){
            return state.todoList;
        }
    },
    mutations:{
        addToDo(state,todo){
            if(!todo) return;
            state.todoList.push(todo);
            localStore.setStore('todo',state.todoList);
        },
        removeToDo(state,index){
            state.todoList.splice(index,1);
            localStore.setStore('todo',state.todoList);
        }
    },
    actions:{
        addToDoAsync({commit},todo){
            commit('addToDo',todo)
        },
        removeToDoAsync({commit},index){
            commit('removeToDo',index);
        }
    }
}