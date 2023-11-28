<script>
import { ref, provide } from 'vue';
import Provide_child1 from '../components/Provide_child1.vue';
export default{
    data(){
        return{
            dataMsg:"message",
        //若傳遞陣列
            dataArr:['str', 'arr', 'ass']
        }
    },
    components:{
        Provide_child1
    },
    methods:{
        addItem(){
            this.dataArr.push('xxx')
        }
    },
    provide(){
        return{
            msg:this.dataMsg,
            cool:"Cool",
            arr: this.dataArr,
        }
    },
    setup(){
        let setupMsg = ref('setupMsg')
        provide('setupMSG', setupMsg)
        return{
            setupMsg
        }
    }
}
</script>

<template>
    <h3> • Provide & Inject 教學 </h3>
    <div class="wrap">
        <h1>這是爺爺</h1>
        <p>這是爺爺的變數dataMsg:{{ this.dataMsg }}</p>
        <input type="text" v-model="this.dataMsg">
        <input type="text" v-model="this.setupMsg">
        <p>{{ this.dataArr }}</p>
        <button type="button" @click="addItem">add item</button>
        <Provide_child1 />
    </div>
</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
.wrap{
    width: 600px;
    height: 600px;
    border: 1px solid black;
}
</style>