const Store = localStorage;

export const localStore = {
    setStore(key,value){
        if(Store.getItem(key)){

        }else{
        }
        Store.setItem(key,JSON.stringify(value));
    },
    getStore(key){
        return JSON.parse(Store.getItem(key));
    },
    removeStore(){
        Store.removeItem(key);
    }
}