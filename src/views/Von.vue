<script>
export default{
    //原本js的打法＝> data: function(){}
    //ES6 語法糖
    //this.變數，代表指向變數，即可讀取到變數的值
    data(){  
        return{
            title:"cool"
        }
    },
    methods:{
        print(){  //print: function(){} //print自定義
            console.log(this.title)
        },  //","後即可新增方法
        sky(){  
            console.log("sky");
        },
        
    }
}
</script>

<template>
    <!-- v-on 監聽 -->
    <h1>v-on</h1>
    <!-- 兩種寫法 -->
    <button type="button" v-on:click="print()">btn</button>
    <button type="button" @click="print()">btn</button>

</template>

<style lang="scss" scoped></style>