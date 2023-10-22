<script>
import child_emit from '../components/child_emit.vue';

export default {
    data() {
        return {
            // data內的變數為‘全域變數’
            childText:"",
        };
    },
    components: { 
        child_emit 
    },
    methods: {
        //methods內的變數為'區域變數'（變數自定義）
        //原本寫法：emitObj: function(params){}
        //語法糖如下：
        emitObj(params){
            console.log(params);
            this.childText = params //不能打this.params
        },

        goToPractice(){
            this.$router.push('/Emit_sign')
        }
    },
}
</script>

<template>
    <h3> • Emit 教學 </h3>
    <h4 style="text-align: center;"> Emit </h4>
    <p style="text-align: center;">從子元件所接受到的訊息：{{ this.childText }}</p>
    <div class="show">
        <!-- 告知子元件，想要父元件做什麼事就傳遞apple這個暗號 -->
        <child_emit @apple="emitObj" />

        <!-- 連接練習題 -->
        <button class="practice" @click="goToPractice"> Go To Practice </button>
    </div>

</template>

<style lang="scss" scoped>
h3 {
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
.show{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.practice{
    margin-top: 5vh;
    border-radius: 5px;
    border: none;
    box-shadow: (2px 2px 2px);
}
</style>