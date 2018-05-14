const audio = {
    _audio:'',
    initAudioWithPath(path){

    },
    initAudioWithEle(ele){
        this._audio = ele;
        // this._audio.autoplay = true;
        this._audio.onplaying = function(e){
            console.log(e);
        } 
        this._audio.addEventListener('ended',()=>{
            this._audio.play();
            console.log('end');
        });
    },
    reday(){

    },
    play(){
        
    },
}





export default audio